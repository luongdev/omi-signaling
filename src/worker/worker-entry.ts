import {LoggerFactory, LogLevel} from "@/core/logger";
import {randomId} from "@/helpers/utils.ts";
import {MqttClient, type MqttClientOptions} from "@/core/mqtt/mqtt-client.ts";
import {type ClientMessage, ClientMessageType, type WorkerMessage, WorkerMessageType} from "@/worker/types.ts";
import {ConnectionState, type MqttMessage} from "@/core/mqtt/types.ts";

declare const self: {
    onconnect: (event: MessageEvent) => void;
};

type Port = any;


const logger = LoggerFactory.getLogger('OmiWorker');
LoggerFactory.setDefaultLevel(LogLevel.DEBUG);
const ports = new Set<MessagePort>();
const subscribedTopics = new Set<string>();
const workerId = randomId('worker');
const portConnectionStates = new Map<string, { connected: boolean; subscribedTopics: Set<string>; port: Port; }>();


let mqttConnected = false;
let mqttClient: MqttClient | undefined;
let mqttOptions: MqttClientOptions | undefined;

self.onconnect = (e: MessageEvent) => {
    const port = e.ports[0] as Port;
    port.id = randomId('port');

    ports.add(port);
    portConnectionStates.set(port.id, {connected: false, subscribedTopics: new Set(), port: port});

    logger.info(`New connection from port: ${port.id}, total: ${ports.size}`);

    port.onmessage = async (e: MessageEvent) => {
        const message = e.data as ClientMessage;

        logger.debug(`Received message from: ${port.id}`, message);
        const messageId = message.id || randomId('msg');

        if (message.type === ClientMessageType.PING) {
            await _emit(port, {
                id: messageId,
                type: WorkerMessageType.PONG,
                payload: {connected: mqttConnected, workerId},
                timestamp: Date.now(),
            })
            return;
        }

        switch (message.type) {
            case ClientMessageType.CONNECT:
                await handleConnect(port, {...message, id: messageId});
                break;

            // case ClientMessageType.DISCONNECT:
            //     handleDisconnect(port, portId, {...message, id: messageId});
            //     break;
            //
            // case ClientMessageType.SUBSCRIBE:
            //     handleSubscribe(port, portId, {...message, id: messageId});
            //     break;
            //
            // case ClientMessageType.UNSUBSCRIBE:
            //     handleUnsubscribe(port, portId, {...message, id: messageId});
            //     break;
            //
            // case ClientMessageType.PUBLISH:
            //     handlePublish(port, portId, {...message, id: messageId});
            //     break;

            default:
                logger.warn(`Received not supported message type: ${message.type}`, message);
                break;
        }
    };
}

const handleConnect = async (port: Port, msg: ClientMessage) => {
    const reqMsgId = msg.id || randomId('msg')
    const config = msg.payload as MqttClientOptions;

    if (mqttConnected && mqttClient && mqttOptions && JSON.stringify(mqttOptions) === JSON.stringify(config)) {
        logger.warn(`Mqtt client already connected with the same configuration`);
        const portState = portConnectionStates.get(port.id);
        if (portState) portState.connected = true;

        return await _emit(port, {
            id: reqMsgId,
            type: WorkerMessageType.CONNECTION,
            payload: {connected: true, workerId},
            timestamp: Date.now()
        });
    }

    if (mqttClient) {
        logger.info(`Disconnecting existing mqtt client`);
        try {
            mqttClient.disconnect();
        } catch (error) {
            logger.error(`Cannot disconnect mqtt:`, error);
        }

        mqttClient = undefined;
        mqttConnected = false;
        await broadcast({
            type: WorkerMessageType.CONNECTION,
            payload: {connected: false},
            timestamp: Date.now(),
        });

        for (const [_, state] of portConnectionStates.entries()) {
            state.connected = false;
        }
    }

    mqttOptions = config;
    logger.info(`Create new mqtt client, config: `, config);

    try {
        mqttClient = new MqttClient(mqttOptions);
        setupMqttEventHandlers(port, reqMsgId);
        const success = await mqttClient.connect();
        if (!success) {
            logger.error(`Cannot connect to mqtt broker`);

            await _emit(port, {type: WorkerMessageType.CONNECTION, payload: {connected: false}, timestamp: Date.now()})
            await _emit(port, {
                type: WorkerMessageType.ERROR,
                payload: {message: 'Cannot connect to mqtt broker'},
                timestamp: Date.now()
            })
        } else {
            mqttConnected = true;
            const portState = portConnectionStates.get(port.id);
            if (portState) portState.connected = true;

            await _emit(port, {
                id: reqMsgId,
                type: WorkerMessageType.CONNECTION,
                payload: {connected: true, workerId},
                timestamp: Date.now()
            })
        }
    } catch (error) {
        logger.error(`Cannot init mqtt client:`, error);

        await _emit(port, {
            type: WorkerMessageType.ERROR,
            payload: {message: (error as Error).message},
            timestamp: Date.now()
        })
        await _emit(port, {type: WorkerMessageType.CONNECTION, payload: {connected: false}, timestamp: Date.now()})
    }
}

const setupMqttEventHandlers = (_1: MessagePort, _2: string) => {
    if (!mqttClient) {
        logger.error(`Mqtt client is not initialized`);
        return;
    }

    mqttClient.onStateChange(async (state: ConnectionState) => {
        console.log('state', state);
        const isConnected = state === ConnectionState.CONNECTED;
        mqttConnected = isConnected;

        if (isConnected) {
            for (const [_, portState] of portConnectionStates.entries()) portState.connected = true;

            if (subscribedTopics.size > 0) {
                logger.info(`Re-subscribe to topics: ${Array.from(subscribedTopics).join(', ')}`);
                for (const topic of subscribedTopics) {
                    mqttClient?.subscribe(topic)
                        .then((success) => {
                            if (success) {
                                logger.info(`Re-subscribed topic: ${topic}`);
                            } else {
                                logger.error(`Re-subscribe topic: ${topic} failed`);
                            }
                        })
                        .catch((error) => {
                            logger.error(`Re-subscribe topic: ${topic} error: `, error);
                        });
                }
            }
        } else if (state === ConnectionState.FAILED) {
            logger.error(`[SharedWorker:${workerId}] Kết nối MQTT thất bại`);
            await broadcast({
                type: WorkerMessageType.ERROR,
                payload: {
                    message: `Kết nối MQTT thất bại`,
                    workerId
                },
                timestamp: Date.now()
            });
        } else {
            logger.info(`Disconnected from mqtt broker`);
            for (const portState of portConnectionStates.values()) portState.connected = false;
        }

        await broadcast({
            type: WorkerMessageType.CONNECTION,
            payload: {connected: isConnected, workerId},
            timestamp: Date.now()
        });
    });

    mqttClient.on('#', async (msg: MqttMessage) => {
        try {
            logger.debug(`Received message from topic: ${msg.topic}`, {msg});
            const msgWithWorkerId = {...msg, workerId};
            await broadcast({type: WorkerMessageType.MESSAGE, payload: msgWithWorkerId, timestamp: msg.timestamp,});
        } catch (error) {
            logger.error(`[SharedWorker:${workerId}] Lỗi khi xử lý tin nhắn:`, error);
        }
    });
}

const broadcast = async (msg: WorkerMessage) => {
    await Promise.allSettled([...portConnectionStates.values()].map(async (state) => await _emit(state.port, msg)))
}

const _emit = async (port: Port, msg: WorkerMessage) => {
    const msgWithId = {...msg, id: msg.id || randomId('broadcast')};
    return await Promise.resolve()
        .then(() => port.postMessage(msgWithId))
        .then(() => logger.debug(`Emit to port: ${port.id}`, {msg: msgWithId}))
        .catch((err) => logger.error(`Error when broadcast to port: ${port.id}`, err));
}
