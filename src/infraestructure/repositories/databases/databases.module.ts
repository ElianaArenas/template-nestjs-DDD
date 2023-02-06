import { Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { OracleModule } from './oracle/oracle.module';

@Module({
  imports: [MongoModule, OracleModule],
  exports: [MongoModule, OracleModule],
})
export class DatabasesModule {}
