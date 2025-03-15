import {type ILogger, type LoggerConfig, LogLevel} from "./types.ts";

const LOG_COLORS: Record<LogLevel, string> = {
    [LogLevel.DEBUG]: 'color: #9E9E9E',
    [LogLevel.INFO]: 'color: #2196F3',
    [LogLevel.WARN]: 'color: #FF9800',
    [LogLevel.ERROR]: 'color: #F44336',
    [LogLevel.NONE]: 'color: #000000'
};

const LOG_PREFIXES: Record<LogLevel, string> = {
    [LogLevel.DEBUG]: 'DEBUG',
    [LogLevel.INFO]: 'INFO',
    [LogLevel.WARN]: 'WARN',
    [LogLevel.ERROR]: 'ERROR',
    [LogLevel.NONE]: 'NONE'
};

export class ConsoleLogger implements ILogger {
    private level: LogLevel;
    private readonly prefix: string;
    private readonly showTimestamp: boolean;
    private readonly timestampFormat: 'iso' | 'locale' | 'epoch';

    constructor(config: LoggerConfig = {}) {
        this.level = config.level ?? LogLevel.INFO;
        this.prefix = config.prefix ?? '';
        this.showTimestamp = config.showTimestamp ?? true;
        this.timestampFormat = config.timestampFormat ?? 'locale';
    }

    public debug(message: string, ...args: any[]): void {
        this.log(LogLevel.DEBUG, message, ...args);
    }

    public info(message: string, ...args: any[]): void {
        this.log(LogLevel.INFO, message, ...args);
    }

    public warn(message: string, ...args: any[]): void {
        this.log(LogLevel.WARN, message, ...args);
    }

    public error(message: string, ...args: any[]): void {
        this.log(LogLevel.ERROR, message, ...args);
    }

    public setLevel(level: LogLevel): void {
        this.level = level;
    }

    public getLevel(): LogLevel {
        return this.level;
    }

    private log(level: LogLevel, message: string, ...args: any[]): void {
        if (level < this.level) {
            return;
        }

        const timestamp = this.formatTimestamp();
        const prefix = this.formatPrefix(level);
        const formattedMessage = `%c${prefix}${timestamp}${message}`;

        switch (level) {
            case LogLevel.DEBUG:
                console.debug(formattedMessage, LOG_COLORS[level], ...args);
                break;
            case LogLevel.INFO:
                console.info(formattedMessage, LOG_COLORS[level], ...args);
                break;
            case LogLevel.WARN:
                console.warn(formattedMessage, LOG_COLORS[level], ...args);
                break;
            case LogLevel.ERROR:
                console.error(formattedMessage, LOG_COLORS[level], ...args);
                break;
        }
    }

    private formatTimestamp(): string {
        if (!this.showTimestamp) {
            return '';
        }

        const now = new Date();
        let timestamp: string;

        switch (this.timestampFormat) {
            case 'iso':
                timestamp = now.toISOString();
                break;
            case 'locale':
                timestamp = now.toLocaleTimeString();
                break;
            case 'epoch':
                timestamp = now.getTime().toString();
                break;
            default:
                timestamp = now.toLocaleTimeString();
        }

        return ` [${timestamp}] `;
    }

    private formatPrefix(level: LogLevel): string {
        let result = `[${LOG_PREFIXES[level]}]`;

        if (this.prefix) {
            result += ` [${this.prefix}]`;
        }

        return result;
    }
}