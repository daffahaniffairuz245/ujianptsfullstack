import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Book } from 'src/book/book.enttiy';

export const typeOrm: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), 
  username: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE,
  entities: [Book],
  synchronize: true,
  logging: true,
};