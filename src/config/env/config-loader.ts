import { IMongoConfiguration, mongoConfig } from '../databases/mongo-config';

export const configLoader = (): IConfiguration => {
  return {
    port: parseInt(process.env.PORT),
    environment: process.env.NODE_ENV,
    mongo: mongoConfig,
  };
};

export interface IConfiguration {
  port: number;
  environment: string;
  mongo: IMongoConfiguration;
}
