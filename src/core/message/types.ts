import type {ProcessedMessage} from "@/core/mqtt/types.ts";

export interface MessageQueueConfig {
    messageTTL: number;
    queueSize: number;
}

export interface QueueOperationResult<T> {
    success: boolean;
    data?: T;
    error?: Error;
}

export interface QueueMessage extends ProcessedMessage {
    expiresAt: number;
    retryCount: number;
}