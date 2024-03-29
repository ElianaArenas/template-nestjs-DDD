import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ApplicationModule } from './application/application.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { DomainModule } from './infraestructure/ioc/domain/domain.module';
import { loggerOptions } from './config/logger/logger-options';
import LoggerMiddleware from './application/middlewares/logger.middleware';
import { CustomLoggerMiddleware } from './application/middlewares/customlog.middleware';

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
  providers: [
    {
      provide: 'LoggerService',
      useClass: CustomLoggerMiddleware,
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
