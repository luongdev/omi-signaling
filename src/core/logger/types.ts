export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    NONE = 4
}

export interface ILogger {

    debug(message: string, ...args: any[]): void;

    info(message: string, ...args: any[]): void;

    warn(message: string, ...args: any[]): void;

    error(message: string, ...args: any[]): void;

    setLevel(level: LogLevel): void;

    getLevel(): LogLevel;
}


export interface LoggerConfig {
    level?: LogLevel;
    prefix?: string;
    showTimestamp?: boolean;
    timestampFormat?: 'iso' | 'locale' | 'epoch';
}