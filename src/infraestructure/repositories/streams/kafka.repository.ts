import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices'


export class KafkaRepository implements OnModuleInit {
  private readonly logger = new Logger();
  
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly _clientKafka: ClientKafka,
    ){}

  async onModuleInit() {
    await this._clientKafka
    .connect()
  }

  async sendKafkaMessage(topic: string, message: any) {
    try {
      this._clientKafka.emit(topic, message);
      return {
        status: true,
        error: '',
      };
    } catch (error) {
      this.logger.error(`Error to send Kafka message`);
      this.logger.error(message);
      return {
        status: false,
        error: String(error),
      };
    }
  }
}