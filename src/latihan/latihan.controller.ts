// import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
// import { register } from 'module';
// import { LatihanService } from './latihanservice';
// import { query } from 'express';

// @Controller('latihan')
// export class LatihanController {

//   constructor(
//     private readonly latihanService: LatihanService
//   ){}
//   @Get()
//   finAll(@Query() query:any){
//     return this.latihanService.findAll(query)
//   }



//     // Route untuk mendapatkan semua data dengan query opsional
//     @Get()
//     findAll(@Query() query: any) {
//         return {
//             method: 'GET',
//             query: query
//         };
//     }

//   // Route untuk mendapatkan detail berdasarkan ID dan nama
//   @Get('detail/:id/:name')
//   detail(@Param('id') id: string, @Param('name') name: string) {
//     return this.latihanService.finDetail(id, name)
//   }


//     @Post("simpan")
//         register(@Body()paylod:any){
//             return{
//                 nama:'hanif',
//                 paylod:paylod
//             }
//         }
     
// }
// // buat lah request dengan method put seperti url berikut
// // http://localhost:4000/latihan/updet/1
// // dan memberikan respone
// // {
// //     "method": "PUT",
// //"id_user" : 1,
// //"payload":{
// //"name": "daffa"
// // "email": "daffa123@gmail.com"
// //"password": "123456789"
// //}
// // }

// // import { Controller, Put, Param, Body } from '@nestjs/common';

// // @Controller('latihan')
// // export class LatihanController {
  
  
// //   @Put("update/:id")
// //   update(@Param('id') id: string, @Body() payload:any) {
// //     return {
// //       method: 'PUT',
// //       id_user:id,
// //       payload: payload
// //     };
// //   }
// // }


import { Body, Controller , Get, Param , Post, Put, Query , Delete } from '@nestjs/common';
import { TugasService  } from './latihanservice';
import { get } from 'http';
import { query } from 'express';

@Controller('tugas')
export class TugasController {

    constructor(
        private readonly TugasService : TugasService
       ){}

   @Get('list') 
   TugasA(){
    return this.TugasService.getAllTugas
   } 
   
   
   @Get('detail/:id')
   detail(@Param('id') id : string){
       return this.TugasService.simpanTugas(id)
   }

  @Post("simpan")
  update(@Body() payload:any) {
    return this.TugasService.simpanTugas(payload)
  }
  

  @Delete('delete/:id')
  tugasD(@Param('id') id : string){
      return this.TugasService.hapusTugas(Number(id))
  }
  
}

