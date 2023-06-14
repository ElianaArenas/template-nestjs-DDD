import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health/health.controller';
import { KafkaController } from './controllers/kafka/kafka.controller';

@Module({
  controllers: [HealthController],
  providers: [],
})
export class ApplicationModule {}
