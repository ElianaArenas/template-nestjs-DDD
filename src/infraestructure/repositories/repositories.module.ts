import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { ExternalApiModule } from './external-api/external-api.module';

@Module({
  imports: [DatabasesModule, ExternalApiModule],
  exports: [DatabasesModule, ExternalApiModule],
})
export class RepositoriesModule {}
