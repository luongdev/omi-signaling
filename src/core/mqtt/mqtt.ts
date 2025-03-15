import type {Message} from "@/core/types.ts";

export interface MqttMessage extends Message {
    topic: string;
    qos: 0 | 1 | 2;
    retain: boolean;
}

export interface ProcessedMessage extends MqttMessage {
    receivedAt: number;
    priority: MessagePriority;
    status: 'pending' | 'processing' | 'processed' | 'failed';
    retries?: number;
    error?: string;
    metadata?: Record<string, any>;
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

export class DefaultMessageClassifier implements MessageClassifier {
    classifyPriority(msg: MqttMessage): MessagePriority {
        return msg ? MessagePriority.LOW : MessagePriority.LOW;
    }

    getImportantTopics(): string[] {
        return ['status/#', 'call/#'];
    }

    isImportant(msg: MqttMessage): boolean {
        return !!msg;
    }

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
    clientId: string;
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