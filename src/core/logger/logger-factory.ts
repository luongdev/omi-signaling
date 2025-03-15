import {type ILogger, LogLevel} from "./types.ts";
import {ConsoleLogger} from "./console-logger.ts";


export class LoggerFactory {
    private static loggers: Map<string, ILogger> = new Map();
    private static defaultLevel: LogLevel = LogLevel.INFO;

    public static getLogger(name: string): ILogger {
        if (!this.loggers.has(name)) {
            const logger = new ConsoleLogger({prefix: name});
            logger.setLevel(this.defaultLevel);
            this.loggers.set(name, logger);
        }
        return this.loggers.get(name)!;
    }

    public static setDefaultLevel(level: LogLevel): void {
        this.defaultLevel = level;
        for (const logger of this.loggers.values()) {
            logger.setLevel(level);
        }
    }

    public static clearLoggers(): void {
        this.loggers.clear();
        this.defaultLevel = LogLevel.INFO;
    }

    public static removeLogger(name: string): boolean {
        const result = this.loggers.delete(name);
        if (result) {
            this.defaultLevel = LogLevel.INFO;
        }
        return result;
    }
}