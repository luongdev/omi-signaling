import type {MqttMessage} from "@/core/mqtt/types.ts";

export interface Store {
    open(): Promise<boolean> | boolean;

    close(): void;

    store(msg: StoredMessage): void;
}

export interface StoredMessage extends MqttMessage {
    read: boolean;
}

export interface AppState {
    data: any;
    updatedAt: number;
}

export interface StoreOperationResult<T> {
    success: boolean;
    data?: T;
    error?: Error;
}