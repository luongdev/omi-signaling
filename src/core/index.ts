import {ClientAdapter} from "@/core/client/client-adapter.ts";
import {LoggerFactory, LogLevel} from "@/core/logger";

LoggerFactory.setDefaultLevel(LogLevel.DEBUG);

const client = new ClientAdapter({
    clientId: 'agent-0069',
    mqttOptions: {
        config: {
            brokerUrl: 'ws://localhost:8083/mqtt',
            clientId: 'agent-0069'
        },
        stateTopics: ['status/#', 'call/#']
    },
    workerUrl: `/dist/omiworker.js?hash=${Date.now()}`,
    operationTimeout: 5000,
    pingInterval: 5000
})

client.connect().then(console.log).catch(console.error)