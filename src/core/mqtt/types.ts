import type {Message} from "@/core/types.ts";

export interface MqttMessage extends Message {
    topic: string;
    qos: 0 | 1 | 2;
    retain: boolean;
}

export interface ProcessedMessage extends MqttMessage {
    receivedAt: number;
    status: 'pending' | 'processing' | 'processed' | 'failed';
    retries?: number;
    error?: string;
}

export enum MessagePriority {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low'
}

export interface MessageClassifier {
    classifyPriority(msg: MqttMessage): MessagePriority;

    isImportant(msg: MqttMessage): boolean;

    getImportantTopics(): string[];
}

export enum ConnectionState {
    CONNECTING = 'connecting',
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    RECONNECTING = 'reconnecting',
    FAILED = 'failed'
}

export interface MqttConfig {
    brokerUrl: string;
    clientId?: string;
    username?: string;
    password?: string;
    keepalive?: number;
    clean?: boolean;
    connectTimeout?: number;
    reconnectPeriod?: number;
    queueQoSZero?: boolean;
    will?: {
        topic: string;
        payload: any;
        qos: 0 | 1 | 2;
        retain: boolean;
    };
    ssl?: boolean;
    protocolVersion?: 3 | 4 | 5;
}
