import type {MqttClientOptions} from "@/core/mqtt/mqtt-client.ts";

export interface ClientAdapterConfig {
    clientId: string;
    workerUrl?: string;
    useSharedWorker?: boolean;
    pingInterval: number;
    operationTimeout: number;
    queueSize?: number,
    messageTTL?: number,
    mqttOptions?: MqttClientOptions;
}

export interface ClientAdapterOperationResult<T = any> {
    success: boolean;
    data?: T;
    error?: Error;
}

export enum ClientAdapterEvent {
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    MESSAGE = 'message',
    ERROR = 'error',
    SUBSCRIBED = 'subscribed',
    PUBLISHED = 'published',
    UNSUBSCRIBED = 'unsubscribed',
    TAB_VISIBLE = 'tab_visible',
    TAB_HIDDEN = 'tab_hidden',
    STATE_LOADED = 'state_loaded'
}

export type ClientAdapterEventHandler = (data?: any) => void;

export enum ClientAdapterConnectionState {
    DISCONNECTED = 'disconnected',
    CONNECTING = 'connecting',
    CONNECTED = 'connected',
    DISCONNECTING = 'disconnecting',
    ERROR = 'error'
}

export enum BroadcastMessageType {
    MESSAGE = 'message',
    CONNECTION_STATE = 'connection_state',
    ERROR = 'error'
}

export interface BroadcastMessage {
    id?: string;
    data: any;
    type: BroadcastMessageType;
    timestamp: number;
}