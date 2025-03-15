import {ClientAdapter} from "@/core/client/client-adapter.ts";

const client = new ClientAdapter({
    clientId: 'agent-0069',
    mqttConfig: {
        brokerUrl: 'ws://localhost:8083/mqtt',
        clientId: 'agent-0069'
    },
    workerUrl: `/dist/omiworker.js?hash=${Date.now()}`,
    operationTimeout: 5000,
    pingInterval: 5000
})

client.connect().then(console.log).catch(console.error)