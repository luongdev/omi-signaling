import {MqttClient} from "@/core/mqtt/mqtt-client.ts";

const client = new MqttClient({
    config: {
        clientId: 'agent-01',
        brokerUrl: 'ws://localhost:8083/mqtt',
    }
})

client.connect();