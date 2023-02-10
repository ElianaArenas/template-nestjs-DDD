import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ApplicationModule } from './application/application.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { DomainModule } from './infraestructure/ioc/domain/domain.module';
import { loggerOptions } from './config/logger/logger-options';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule.forRoot(loggerOptions),
    ApplicationModule,
    DomainModule,
    InfraestructureModule,
  ],
})
export class AppModule {}
