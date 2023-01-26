import { Module } from '@nestjs/common';
import { AppController } from './app/controllers/app.controller';
import { HealthController } from './health/controllers/health.controller';

@Module({
  controllers: [AppController, HealthController],
  providers: [],
})
export class ApplicationModule {}
