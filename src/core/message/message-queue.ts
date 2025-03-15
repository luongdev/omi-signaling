import {MessagePriority} from "@/core/mqtt/types.ts";
import type {MessageQueueConfig, QueueMessage, QueueOperationResult} from "@/core/message/types.ts";
import {type ILogger, LoggerFactory} from "@/core/logger";

export class MessageQueue {

    private readonly config: MessageQueueConfig;
    private readonly logger: ILogger;
    private readonly queues: Map<MessagePriority, QueueMessage[]>;

    private totalMessages = 0;

    constructor(config: MessageQueueConfig) {
        this.config = config;
        this.logger = LoggerFactory.getLogger('MessageQueue');
        this.logger.info('Khởi tạo Message Queue');

        this.queues = new Map<MessagePriority, QueueMessage[]>();
        this.queues.set(MessagePriority.HIGH, []);
        this.queues.set(MessagePriority.MEDIUM, []);
        this.queues.set(MessagePriority.LOW, []);

        this.logger.debug('Message queue initialized', this.queues);
    }

    enqueue(message: QueueMessage): QueueOperationResult<boolean> {
        try {
            if (message.expiresAt < Date.now())
                return {success: false, error: new Error(`Message expired: ${message.id}`)};

            const queue = this.queues.get(message.priority);
            if (!queue) return {success: false, error: new Error(`Priority queue not found: ${message.priority}`)};

            if (this.totalMessages >= this.config.queueSize) {
                const removedCount = this.removeExpiredMessages();
                if (!removedCount && this.totalMessages >= this.config.queueSize) {
                    return {success: false, error: new Error('Message queue is full')};
                }
            }

            queue.push(message);
            this.totalMessages++;

            return {success: true, data: true};
        } catch (error) {
            this.logger.error(`Cannot enqueue message, error: `, error);
            return {success: false, error: error as Error};
        }
    }

    removeExpiredMessages(): number {
        try {
            let removedCount = 0;
            const now = Date.now();

            for (const [priority, queue] of this.queues.entries()) {
                const initialLength = queue.length;
                const validMessages = queue.filter(message => message.expiresAt > now);
                const removedFromQueue = initialLength - validMessages.length;

                if (removedFromQueue > 0) {
                    this.queues.set(priority, validMessages);
                    removedCount += removedFromQueue;
                    this.logger.debug(`Removed ${removedFromQueue} expired messages from queue: ${priority}`);
                }
            }

            this.totalMessages -= removedCount;
            if (removedCount > 0) {
                this.logger.info(`Removed ${removedCount} expired messages from queue`);
            }

            return removedCount;
        } catch (error) {
            this.logger.error(`Remove expired message error: `, error);
            return 0;
        }
    }
}