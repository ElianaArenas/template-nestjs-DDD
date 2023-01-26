export const mongoConfig: IMongoConfiguration = {
  uri: process.env.MONGO_URI,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  databaseName: process.env.MONGO_DATABASE_NAME,
};

export interface IMongoConfiguration {
  uri: string;
  username: string;
  password: string;
  databaseName: string;
}
