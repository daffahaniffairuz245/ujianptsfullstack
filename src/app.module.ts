import { Module } from '@nestjs/common';
import { TugasController } from './latihan/latihan.controller';
import { TugasService } from './latihan/latihanservice';
import { Controller } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LatihanModule } from './latihan/latihan.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {BookModule} from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const { typeOrm } = await import('./config/TypeOrmconfig')
        return typeOrm
      },
    }),
    LatihanModule, TugasModule, BookModule
  ],
  controllers: [],
  providers: [TugasService]
})
export class TugasModule {}