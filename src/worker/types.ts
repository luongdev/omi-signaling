import type {Message} from "@/core/types.ts";

export interface WorkerConfig {
    autoInitialize: boolean;
    incognitoDetectionTimeout: number;
    initializationTimeout: number;
    allowIncognito: boolean;
}

export enum ClientMessageType {
    SUBSCRIBE = 'subscribe',
    UNSUBSCRIBE = 'unsubscribe',
    PUBLISH = 'publish',
    CONNECT = 'connect',
    DISCONNECT = 'disconnect',
    PING = 'ping'
}

export enum WorkerMessageType {
    PONG = 'pong',
    ERROR = 'error',
    MESSAGE = 'message',
    CONNECTION = 'connection',
    READY = 'ready',
    SUBSCRIBED = 'subscribed',
    PUBLISHED = 'published',
    UNSUBSCRIBED = 'unsubscribed'
}

export interface ClientMessage extends Message {
    type: ClientMessageType;
}

export interface WorkerMessage extends Message {
    type: WorkerMessageType;
}

export interface WorkerOperationResult<T> {
    success: boolean;
    data?: T;
    error?: Error;
}

export enum WorkerEvent {
    INITIALIZED = 'initialized',
    CONNECTION = 'connection',
    DISCONNECTION = 'disconnection',
    CLIENT_MESSAGE = 'client_message',
    MESSAGE = 'message',
    ERROR = 'error'
}