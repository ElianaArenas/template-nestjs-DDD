import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { mongoConfig } from './config/databases/mongo-config';
import { configLoader } from './config/env/config-loader';
import { configOptions } from './config/env/config-options';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { DomainModule } from './infraestructure/ioc/domain/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApplicationModule,
    DomainModule,
    InfraestructureModule,
  ],
})
export class AppModule {}
