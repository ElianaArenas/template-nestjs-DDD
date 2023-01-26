import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class OracleService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'oracle',
      name: 'oracleConnection',
      username: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = ${process.env.ORACLE_HOST})(PORT = ${process.env.ORACLE_PORT}))(CONNECT_DATA =(SID= ${process.env.ORACLE_SID})))`,
      entities: [],
      synchronize: true,
    };
  }
}
