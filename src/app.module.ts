import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { configOptions } from './config/env/config-options';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { DomainModule } from './infraestructure/ioc/domain/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    ApplicationModule,
    DomainModule,
    InfraestructureModule,
  ],
})
export class AppModule {}
