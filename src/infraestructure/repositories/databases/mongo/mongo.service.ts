import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { IMongoConfiguration } from 'src/config/databases/mongo-config';

@Injectable()
export class MongoService {
  constructor() {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env.MONGO_URI,
      auth: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
      },
      dbName: process.env.MONGO_DATABASE_NAME,
    };
  }
}
