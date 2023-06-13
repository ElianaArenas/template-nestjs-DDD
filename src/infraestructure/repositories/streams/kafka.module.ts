import { Module, Provider } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaRepository } from "./kafka.repository";
import { v4 as uuidv4 } from 'uuid';

const providers: Provider[] = [
  {
    provide: 'KAFKA_REPOSITORY',
    useClass: KafkaRepository,
  },
];

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'KAFKA_PRODUCER',
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
            groupId: `${process.env.KAFKA_CLIENT_ID}-${uuidv4().split('-')[4]}`
          },
        }
      }
    ])
  ],
  providers,
  exports: providers
})
export class KafkaModule {}; 

