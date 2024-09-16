import { Module } from '@nestjs/common';
import { TugasController } from './latihan.controller';
import {TugasService} from  './latihanservice'


@Module({
  controllers: [TugasController],
  providers: [TugasService]
})
export class LatihanModule {}
