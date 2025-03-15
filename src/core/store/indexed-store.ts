import type {Store, StoredMessage} from "@/core/store/types.ts";
import {type ILogger, LoggerFactory} from "@/core/logger";

export interface IndexedDBConfig {
    dbName: string;
    dbVersion: number;
    storeNames: {
        appState: string;
        timestamps: string;
    };
}

export class IndexedStore implements Store {
    private db: IDBDatabase | null = null;
    private openPromise?: Promise<boolean>;

    private readonly logger: ILogger;
    private readonly config: IndexedDBConfig;

    constructor(config: IndexedDBConfig) {
        this.config = config;
        this.logger = LoggerFactory.getLogger('IndexedStore');
    }

    close(): void {
    }

    async open(): Promise<boolean> {
        debugger
        if (this.db) return true;

        if (this.openPromise) return await this.openPromise;

        try {
            this.openPromise = new Promise((resolve, reject) => {
                const request = indexedDB.open(this.config.dbName, this.config.dbVersion);
                request.onupgradeneeded = this.handleUpgradeNeeded.bind(this);
                request.onsuccess = (event) => {
                    this.db = (event.target as IDBOpenDBRequest).result;
                    this.db.onclose = () => {
                        this.logger.warn('IndexedDB connection closed');
                        this.db = null;
                    };

                    this.db.onerror = (error) => this.logger.error(`IndexedDB error: `, error);

                    this.openPromise = undefined;
                    resolve(true);
                };

                request.onerror = (event) => {
                    const error = (event.target as IDBOpenDBRequest).error;
                    this.logger.error(`IndexedDB error`, error);

                    this.openPromise = undefined;
                    reject(error);
                };
            })

            return this.openPromise;
        } catch (error) {
            this.logger.error(`Error when connect indexedDB: ${(error as Error).message}`, error);
            return false;
        }

    }

    store(_: StoredMessage): void {
    }

    private handleUpgradeNeeded(event: IDBVersionChangeEvent): void {
        const db = (event.target as IDBOpenDBRequest).result;
        this.logger.warn(`IndexedDB upgrade needed: ${this.config.dbName} v${this.config.dbVersion}`);
        this.createObjectStores(db);
    }

    private createObjectStores(db: IDBDatabase): void {
        const {storeNames} = this.config;

        if (!db.objectStoreNames.contains(storeNames.appState)) {
            this.logger.debug(`Tạo object store: ${storeNames.appState}`);
            const appStateStore = db.createObjectStore(storeNames.appState, {keyPath: 'id'});
            appStateStore.createIndex('updatedAt', 'updatedAt', {unique: false});
        }

        if (!db.objectStoreNames.contains(storeNames.timestamps)) {
            this.logger.debug(`Tạo object store: ${storeNames.timestamps}`);
            db.createObjectStore(storeNames.timestamps, {keyPath: 'id'});
        }
    }
}