import { Module } from '@nestjs/common';
import { OracleModule } from './oracle/oracle.module';

@Module({

  // TODO: commenting oracle connection to test kafka
  // imports: [OracleModule],
  // exports: [OracleModule],
  imports: [],
  exports: [],
})
export class DatabasesModule {}
