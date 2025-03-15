import {
    type ClientAdapterConfig,
    ClientAdapterConnectionState,
    ClientAdapterEvent,
    type ClientAdapterEventHandler, type ClientAdapterOperationResult
} from "@/core/client/types.ts";
import {type ILogger, LoggerFactory} from "@/core/logger";
import {randomId} from "@/helpers/utils.ts";
import {type ClientMessage, ClientMessageType, type WorkerMessage, WorkerMessageType} from "@/worker/types";

export class ClientAdapter {

    private readonly config: ClientAdapterConfig;
    private readonly logger: ILogger;
    private readonly eventHandlers: Map<ClientAdapterEvent, Set<ClientAdapterEventHandler>> = new Map();

    private worker: SharedWorker | null = null;
    private port: MessagePort | null = null;
    private connectionState: ClientAdapterConnectionState = ClientAdapterConnectionState.DISCONNECTED;
    private messageCounter: number = 0;
    private pendingCallbacks: Map<string, { resolve: Function, reject: Function, timeout: number }> = new Map();
    private pingIntervalId: number | null = null;


    constructor(config: ClientAdapterConfig) {
        const defaultConfig: ClientAdapterConfig = {
            clientId: randomId('client'),
            operationTimeout: 30000,
            pingInterval: 30000,
            useSharedWorker: true,
        };


        this.config = {...defaultConfig, ...config};
        if (this.config.mqttConfig && !this.config.mqttConfig.clientId) {
            this.config.mqttConfig.clientId = this.config.clientId;
        }
        if (!this.config.workerUrl?.length) {
            this.config.workerUrl = '/omiworker.js';
        }

        this.logger = LoggerFactory.getLogger(`ClientAdapter:${this.config.clientId}`);


        Object.values(ClientAdapterEvent).forEach(evt => this.eventHandlers.set(evt as ClientAdapterEvent, new Set()));
        this.logger.debug('Client Adapter initialized', {config: this.config});
    }

    async connect(): Promise<ClientAdapterOperationResult<boolean>> {
        try {
            this.logger.debug('Trying to connect to mqtt');

            if (this.connectionState === ClientAdapterConnectionState.CONNECTED) return {success: true, data: true};

            if (this.connectionState === ClientAdapterConnectionState.CONNECTING) {
                return {success: false, error: new Error('Connecting in progress')};
            }

            this.connectionState = ClientAdapterConnectionState.CONNECTING;

            let useDirectConnection = false;

            if (!this.config.useSharedWorker) {
                this.logger.debug('Direct connection to mqtt broker');
                useDirectConnection = true;
            } else if (typeof SharedWorker === 'undefined') {
                this.logger.warn('worker not supported, falling back to direct connection');
                useDirectConnection = true;
            }

            if (useDirectConnection) {
                return this.connectDirectly();
            }

            try {
                this.worker = new SharedWorker(this.config.workerUrl!, {type: 'module', name: 'OmiWorker'});
                this.port = this.worker.port;

                this.port.onmessage = this.handleWorkerMessage.bind(this);
                this.port.start();
                this.logger.debug('Worker initialized');
            } catch (error) {
                this.logger.error('Cannot create worker, connect directly', error);
                return this.connectDirectly();
            }

            const connectResult = await this._emitWorker({
                type: ClientMessageType.CONNECT,
                payload: this.config.mqttConfig
            });

            if (connectResult.success) {
                this.logger.debug('Worker connected', connectResult.data);
                this.connectionState = ClientAdapterConnectionState.CONNECTED;
                this.startPing();
                this._emit(ClientAdapterEvent.CONNECTED, connectResult.data);

                return {success: true, data: connectResult.data};
            } else {
                this.logger.error('Lỗi khi kết nối đến worker', connectResult.error);
                this.connectionState = ClientAdapterConnectionState.ERROR;
                this._emit(ClientAdapterEvent.ERROR, connectResult.error);

                return connectResult;
            }
        } catch (error) {
            this.logger.error('Cannot connect to server', error);
            this.connectionState = ClientAdapterConnectionState.ERROR;
            this._emit(ClientAdapterEvent.ERROR, error);

            return {success: false, error: error as Error};
        }
    }

    private async connectDirectly(): Promise<ClientAdapterOperationResult<boolean>> {
        return {success: false,};
    }

    private handleWorkerMessage(event: MessageEvent): void {
        try {
            const message = event.data as WorkerMessage;
            if (!message || !message.type) {
                this.logger.warn('Received unsupported message from worker', message);
                return;
            }

            this.logger.debug(`Received message ${message.type} from worker`, {id: message.id, type: message.type});
            if (message.id && this.pendingCallbacks.has(message.id)) {
                const callback = this.pendingCallbacks.get(message.id)!;
                clearTimeout(callback.timeout);
                this.pendingCallbacks.delete(message.id);
                if (message.type === WorkerMessageType.ERROR) {
                    this.logger.error('Received error from worker: ', message.payload);
                    callback.reject(new Error(message.payload.message || 'Unknown error from worker'));
                    return;
                }

                callback.resolve({success: true, data: message.payload});
                if (message.type === WorkerMessageType.PONG) return;
            }

            switch (message.type) {
                case WorkerMessageType.READY:
                    this.logger.debug('Worker ready', message.payload);
                    break;

                case WorkerMessageType.CONNECTION:
                    this.handleConnectionStateMessage(message);
                    break;
                //
                // case WorkerMessageType.MESSAGE:
                //     this.handleMQTTMessage(message);
                //     break;
                //
                // case WorkerMessageType.ERROR:
                //     this.handleErrorMessage(message);
                //     break;

                case WorkerMessageType.PONG:
                    break;

                default:
                    this.logger.debug(`Received not supported message: ${message.type}`, message);
                    break;
            }
        } catch (error) {
            this.logger.error('Worker message process error:', error);
        }
    }

    private handleConnectionStateMessage(message: WorkerMessage): void {
        try {
            const {connected, workerId} = message.payload;
            this.logger.debug(`Received connection state message from worker`, {connected, workerId});
            if (connected) {
                this.connectionState = ClientAdapterConnectionState.CONNECTED;
                this._emit(ClientAdapterEvent.CONNECTED, {connected, workerId});
            } else {
                this.connectionState = ClientAdapterConnectionState.DISCONNECTED;
                this._emit(ClientAdapterEvent.DISCONNECTED, {connected, workerId});
            }
        } catch (error) {
            this.logger.error('Error when handling connection state message', error);
        }
    }

    private async ping(): Promise<ClientAdapterOperationResult> {
        try {
            if (!this.config.useSharedWorker || !this.port) {
                return {success: true, data: {connected: false, timestamp: Date.now()}};
            }

            const pingId = randomId('ping');

            return await this._emitWorker({type: ClientMessageType.PING, payload: {id: pingId}});
        } catch (error) {
            this.logger.warn('Cannot ping worker', error);
            return {success: true, data: {connected: false, timestamp: Date.now()}};
        }
    }

    private startPing(): void {
        if (this.pingIntervalId) {
            this.stopPing();
        }

        this.pingIntervalId = window.setInterval(() => {
            this.ping().catch((error: Error) => {
                this.logger.error('Ping error: ', error);
            });
        }, this.config.pingInterval);

        this.logger.debug('Started worker ping interval');
    }

    private stopPing(): void {
        if (this.pingIntervalId) {
            this.logger.debug('Stopped worker ping interval');
            window.clearInterval(this.pingIntervalId);
            this.pingIntervalId = null;
        }
    }


    private _emitWorker(msg: Partial<ClientMessage>): Promise<ClientAdapterOperationResult> {
        return new Promise((resolve, reject) => {
            try {
                if (msg.type === ClientMessageType.PING) {
                    if (!this.port || this.connectionState !== ClientAdapterConnectionState.CONNECTED) {
                        this.logger.warn('Cannot ping worker, not connected');
                        resolve({success: true, data: {connected: false, timestamp: Date.now()}});
                        return;
                    }
                }

                if (!this.port) {
                    this.logger.error('Not connected to worker');
                    reject(new Error('Not connected to worker'));
                    return;
                }

                const id = `${this.config.clientId}-${Date.now()}-${this.messageCounter++}`;
                const fullMessage: ClientMessage = {
                    id,
                    payload: msg.payload,
                    type: msg.type || ClientMessageType.PING,
                    timestamp: msg.timestamp || Date.now(),
                };

                const timeout =
                    msg.type === ClientMessageType.CONNECT || msg.type === ClientMessageType.DISCONNECT
                        ? this.config.operationTimeout * 2
                        : this.config.operationTimeout;

                const timeoutId = window.setTimeout(() => {
                    if (this.pendingCallbacks.has(id)) {
                        const callback = this.pendingCallbacks.get(id)!;
                        this.pendingCallbacks.delete(id);

                        if (msg.type === ClientMessageType.PING) {
                            this.logger.warn('Ping worker timeout after:', timeout);
                            callback.resolve({success: true, data: {connected: false, timestamp: Date.now()}});
                        } else {
                            this.logger.error(`Timeout when sending message ${msg.type} to worker`);
                            callback.reject(new Error(`Timeout when sending message ${msg.type} to worker`));
                        }
                    }
                }, timeout);

                this.pendingCallbacks.set(id, {resolve, reject, timeout: timeoutId});

                try {
                    this.port.postMessage(fullMessage);
                    this.logger.debug(`Sent message ${msg.type} to worker`, {message: fullMessage});
                } catch (postError) {
                    clearTimeout(timeoutId);
                    this.pendingCallbacks.delete(id);
                    this.logger.error(`Error when sending message ${msg.type} to worker`, postError);
                    reject(postError);
                }
            } catch (error) {
                this.logger.error('Cannot emit to worker', error);
                reject(error);
            }
        });
    }

    private _emit(event: ClientAdapterEvent, data?: any): void {
        if (!event) {
            this.logger.debug('ClientAdapterEvent undefined');
            return;
        }

        const validEvents = Object.values(ClientAdapterEvent);
        if (!validEvents.includes(event as any)) {
            this.logger.error(`Event is invalid: ${event}`);
            return;
        }

        if (!this.eventHandlers.has(event)) this.eventHandlers.set(event, new Set());

        const handlers = this.eventHandlers.get(event)!;
        if (!handlers.size) return;

        const handlerPromises = [...handlers].map((handler) =>
            Promise.resolve(handler(data)).catch((err) => {
                return {error: err};
            })
        );

        Promise.allSettled(handlerPromises).then((results) => {
            results.forEach((result) => {
                if (result.status === 'rejected') {
                    this.logger.error(`Error call handler for: ${event}`, result.reason);
                }
            });
        });
    }
}