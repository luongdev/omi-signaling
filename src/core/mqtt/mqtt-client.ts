import mqtt from 'mqtt'
import {
    ConnectionState, MessagePriority,
    type MqttConfig,
    type MqttMessage
} from "@/core/mqtt/types.ts";
import {type ILogger, LoggerFactory} from "@/core/logger";

const isProd = import.meta.env.MODE === 'production';

export interface MqttClientOptions {
    config: MqttConfig;
    stateTopics: string[];
}

export class MqttClient {
    private readonly config: MqttConfig;
    private readonly logger: ILogger;
    private readonly stateTopics: string[];
    private readonly messageHandlers: Map<string, ((message: MqttMessage) => void)[]> = new Map();
    private readonly connectionStateHandlers: ((state: ConnectionState) => void)[] = [];

    private client?: mqtt.MqttClient;
    private connectionState: ConnectionState = ConnectionState.DISCONNECTED;


    constructor(options: MqttClientOptions) {
        this.config = options.config;
        this.stateTopics = options.stateTopics;
        this.logger = LoggerFactory.getLogger('MqttClient');
        this.logger.info(`Connect to mqtt: ${this.config.brokerUrl}`);
    }

    disconnect(): void {
        if (!this.client) return;

        this.client.end(true, () => {
            this.client = undefined;
            this.logger.debug('Mqtt client disconnected');
            this.updateConnectionState(ConnectionState.DISCONNECTED);
        });
    }

    async connect(): Promise<boolean> {
        if (this.client) return true;

        this.updateConnectionState(ConnectionState.CONNECTING);

        try {
            if (!this.config.brokerUrl) {
                this.updateConnectionState(ConnectionState.FAILED);
                return false;
            }

            this.client = mqtt.connect(this.config.brokerUrl, {
                clientId: this.config.clientId,
                username: this.config.username,
                password: this.config.password,
                keepalive: this.config.keepalive || 15,
                connectTimeout: this.config.connectTimeout || 5000,
                reconnectPeriod: this.config.reconnectPeriod || 5000,
                clean: this.config.clean !== undefined ? this.config.clean : true,
                queueQoSZero: this.config.queueQoSZero !== undefined ? this.config.queueQoSZero : true,
                will: this.config.will,
                rejectUnauthorized: !isProd,
            });

            this.setupEventHandlers();

            return new Promise<boolean>((resolve) => {
                const connectHandler = () => {
                    this.client?.removeListener('connect', connectHandler);
                    this.client?.removeListener('error', errorHandler);
                    resolve(true);
                };

                const errorHandler = (error: Error) => {
                    this.client?.removeListener('connect', connectHandler);
                    this.client?.removeListener('error', errorHandler);
                    this.logger.error(`Lỗi khi kết nối đến MQTT broker: ${error.message}`, error);
                    resolve(false);
                };

                this.client?.once('connect', connectHandler);
                this.client?.once('error', errorHandler);
            });
        } catch (error) {
            this.logger.error(`Lỗi khi kết nối đến MQTT broker: ${(error as Error).message}`, error);
            this.updateConnectionState(ConnectionState.FAILED);
            return false;
        }
    }

    async subscribe(topic: string, qos: 0 | 1 | 2 = 0): Promise<boolean> {
        if (!this.client) {
            this.logger.error('Client is not connected');
            return false;
        }

        return await new Promise<boolean>((resolve) => {
            this.client?.subscribe(topic, {qos,}, (error) => {
                if (error) {
                    this.logger.error(`Cannot subscribe topic ${topic}: ${error.message}`, error);
                    resolve(false);
                } else {
                    this.logger.info(`Subscribed ${topic} (QoS: ${qos})`);
                    resolve(true);
                }
            });
        });
    }

    onStateChange(handler: (state: ConnectionState) => void): void {
        this.connectionStateHandlers.push(handler);
        return handler(this.connectionState);
    }

    public offStateChange(handler: (state: ConnectionState) => void): void {
        const index = this.connectionStateHandlers.indexOf(handler);
        if (index !== -1) {
            this.connectionStateHandlers.splice(index, 1);
        }
    }

    public on(topic: string, handler: (msg: MqttMessage) => void): void {
        if (!this.messageHandlers.has(topic)) {
            this.messageHandlers.set(topic, []);
        }

        this.messageHandlers.get(topic)?.push(handler);
    }

    public off(topic: string, handler?: (msg: MqttMessage) => void): void {
        if (!handler) {
            this.messageHandlers.delete(topic);
            return;
        }

        const handlers = this.messageHandlers.get(topic);
        if (handlers) {
            const index = handlers.indexOf(handler);
            if (index !== -1) {
                handlers.splice(index, 1);
            }

            if (handlers.length === 0) {
                this.messageHandlers.delete(topic);
            }
        }
    }

    private updateConnectionState(state: ConnectionState): void {
        if (this.connectionState !== state) {
            this.connectionState = state;
            this.connectionStateHandlers.forEach(handler => {
                try {
                    handler(state);
                } catch (error: any) {
                    this.logger.error(`Connection state handler error: ${error?.message}`, error);
                }
            });
        }
    }

    private setupEventHandlers(): void {
        if (!this.client) {
            return;
        }

        this.client.on('connect', async () => {
            this.logger.debug('Mqtt broker connected');
            this.updateConnectionState(ConnectionState.CONNECTED);
            await this.subscribeToImportantTopics();
        });

        this.client.on('reconnect', () => {
            this.logger.debug('Reconnecting to mqtt broker');
            this.updateConnectionState(ConnectionState.RECONNECTING);
        });

        this.client.on('close', () => {
            this.logger.debug('Mqtt client closed');
            this.updateConnectionState(ConnectionState.DISCONNECTED);
        });

        this.client.on('offline', () => {
            this.logger.debug('Mqtt client offline');
            this.updateConnectionState(ConnectionState.DISCONNECTED);
        });

        this.client.on('error', (error) => {
            this.logger.error(`Mqtt client error: ${error.message}`, error);
            if (this.connectionState === ConnectionState.CONNECTING) {
                this.updateConnectionState(ConnectionState.FAILED);
            }
        });

        this.client.on('message', (topic, payload, packet) => {
            try {
                const message: MqttMessage = {
                    topic,
                    id: packet.messageId?.toString(),
                    payload: this.parsePayload(payload),
                    qos: packet.qos as 0 | 1 | 2,
                    retain: packet.retain,
                    timestamp: Date.now()
                };

                let priority = MessagePriority.MEDIUM;
                for (const stateTopic of this.stateTopics) {
                    if (this.topicMatchesPattern(topic, stateTopic)) {
                        priority = MessagePriority.HIGH;
                        break;
                    }
                }

                this.logger.debug(`Received message from topic ${topic} with priority ${priority}`);

                this.notifyMessageHandlers(topic, message);
            } catch (error) {
                this.logger.error(`Lỗi khi xử lý tin nhắn từ topic ${topic}: ${(error as Error).message}`, error);
            }
        });
    }

    async subscribeToImportantTopics(): Promise<Record<string, boolean>> {
        if (!this.stateTopics.length) {
            this.logger.warn('No state topics to subscribe');
            return {};
        }

        this.logger.debug(`Subscribing to important topics: ${this.stateTopics.join(', ')}`);
        const result = await Promise.all(this.stateTopics.map(topic => this.subscribe(topic, 1)));
        return this.stateTopics.reduce((acc: Record<string, boolean>, topic, index) => {
            acc[topic] = result[index];
            return acc;
        }, {});
    }

    private parsePayload(payload: Buffer): any {
        const stringPayload = payload.toString();
        try {
            return JSON.parse(stringPayload);
        } catch (error) {
            return stringPayload;
        }
    }

    private notifyMessageHandlers(topic: string, msg: MqttMessage): void {
        const exactHandlers = this.messageHandlers.get(topic);
        if (exactHandlers) {
            exactHandlers.forEach(handler => {
                try {
                    handler(msg);
                } catch (error) {
                    this.logger.error(`Error when notify message ${topic}: ${(error as Error).message}`, error);
                }
            });
        }

        this.messageHandlers.forEach((handlers, pattern) => {
            if (pattern !== topic && this.topicMatchesPattern(topic, pattern)) {
                handlers.forEach(handler => {
                    try {
                        handler(msg);
                    } catch (error) {
                        this.logger.error(`Error when notify message ${pattern}: ${(error as Error).message}`, error);
                    }
                });
            }
        });
    }

    private topicMatchesPattern(topic: string, pattern: string): boolean {
        if (pattern === topic) return true;

        if (pattern.endsWith('#')) {
            const prefix = pattern.substring(0, pattern.length - 1);
            return topic.startsWith(prefix)
        }

        const regexPattern = pattern
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .replace(/\\\+/g, '[^/]+')
            .replace(/\\#/g, '.*');

        const regex = new RegExp(`^${regexPattern}$`);

        return regex.test(topic);
    }

    // private attemptReconnect(): void {
    //     if (this.reconnectTimer) {
    //         return;
    //     }
    //
    //     const reconnectDelay = this.config.reconnectPeriod;
    //     this.logger.info(`Sẽ kết nối lại sau ${reconnectDelay}ms`);
    //
    //     this.reconnectTimer = setTimeout(() => {
    //         this.reconnectTimer = undefined;
    //         this.logger.info('Đang thử kết nối lại...');
    //         this.updateConnectionState(ConnectionState.RECONNECTING);
    //
    //         this.disconnect();
    //         this.connect().catch(error => {
    //             this.logger.error(`Lỗi khi kết nối lại: ${(error as Error).message}`, error);
    //             this.updateConnectionState(ConnectionState.FAILED);
    //             this.attemptReconnect();
    //         });
    //     }, reconnectDelay);
    // }
    //
    // private stopReconnectTimer(): void {
    //     if (!this.reconnectTimer) {
    //         return;
    //     }
    //
    //     this.logger.debug('Stopping reconnect timer');
    //     clearTimeout(this.reconnectTimer);
    //     this.reconnectTimer = undefined;
    // }

    // private attemptReconnect(): void {
    //     if (this.reconnectTimer) return;
    //
    //     const reconnectDelay = this.config.reconnectPeriod || 5000;
    //     this.logger.info(`Reconnect after ${reconnectDelay}ms`);
    //
    //     this.reconnectTimer = setTimeout(() => {
    //         this.reconnectTimer = undefined;
    //         this.logger.info('Trying to reconnect...');
    //         this.updateConnectionState(ConnectionState.RECONNECTING);
    //
    //         this.disconnect();
    //         this.connect().catch(error => {
    //             this.logger.error(`Cannot reconnect error: ${(error as Error).message}`, error);
    //             this.updateConnectionState(ConnectionState.FAILED);
    //             this.attemptReconnect();
    //         });
    //     }, reconnectDelay);
    // }
}