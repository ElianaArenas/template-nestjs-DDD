import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { IMongoConfiguration } from 'src/config/databases/mongo-config';

@Injectable()
export class MongoService {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const mongoConfig = this.configService.get<IMongoConfiguration>('mongo');
    return {
      uri: mongoConfig.uri,
      auth: {
        username: mongoConfig.username,
        password: mongoConfig.password,
      },
      dbName: mongoConfig.databaseName,
    };
  }
}
