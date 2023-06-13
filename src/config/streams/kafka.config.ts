import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Partitioners } from "kafkajs";


export const KAFKA_CONFIG: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
      retry: {
        retries: 6,
        initialRetryTime: 4000,
      },
      ssl: {
        rejectUnauthorized: true,
      },
      sasl: {
        mechanism: 'plain',
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD,
      },
    },
    consumer: {
      groupId: process.env.KAFKA_CLIENT_ID,
      allowAutoTopicCreation: true,
      readUncommitted: true,
    },
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner
    },
    run: {
      autoCommit: true
    },
    subscribe: {
      fromBeginning: true,
    },
  }
}