import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { DomainModule } from './infraestructure/ioc/domain/domain.module';
import LoggerMiddleware from './application/middlewares/logger.middleware';
import { CustomLoggerMiddleware } from './application/middlewares/customlog.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
