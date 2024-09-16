import { Body, Controller , Get, Param , Post, Put, Query , Delete } from '@nestjs/common';
import { TugasService  } from './latihan/latihanservice';
import { get } from 'http';
import { query } from 'express';

@Controller('tugas')
export class TugasController {

    constructor(
        private readonly TugasService : TugasService
       ){}

   @Get('list') 
   TugasA(){
    return this.TugasService.getAllTugas()
   } 
   
   
   @Get('detail/:id')
   detail(@Param('id') id : string){
       return this.TugasService.getTugasDetail(+id)
   }

  @Post("simpan")
  update(@Body() payload:any) {
    return this.TugasService.simpanTugas(payload)
  }
  

  @Delete('delete/:id')
  tugasD(@Param('id') id : string){
      return this.TugasService.hapusTugas(+id)
  }
  
}