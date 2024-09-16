// import { Injectable, Query } from '@nestjs/common';
// import { METHODS } from 'http';

// @Injectable()
// export class LatihanService {
//     findAll(query:any){
//         return{
//             msg: "siap latihan service",
//           params: query
//         };
//     }
//     finDetail(id:string, name:string){
//         return{
//             method:'Get',
//             id:id,
//             name:name
//         }
//     }
//     register (payload:any){
//         return{
//             method:'get',
//             payload:payload
//         }
//     }
// }



import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TugasService {
  private tugas = [];

  getAllTugas() {
    return {
      msg: 'success',
      filter: {
        page: 1,
        page_size: 10,
      },
      data: this.tugas,
    };
  }

  getTugasDetail(id: number) {
    const tugas = this.tugas.find((item) => item.id === id);
    if (!tugas) {
      throw new NotFoundException(`Tugas dengan id ${id} tidak ditemukan`);
    }
    return {
      status: 'success',
      msg: `Tugas dengan id ${id} berhasil ditemukan`,
      data: tugas,
    };
  }

  simpanTugas(tugasData: any) {
    const id = this.tugas.length + 1;
    const newTugas = { id, ...tugasData };
    this.tugas.push(newTugas);
    return {
      status: 'success',
      msg: 'Tugas berhasil disimpan',
      data: newTugas,
    };
  }

  hapusTugas(id: number) {
    const index = this.tugas.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Tugas dengan id ${id} tidak ditemukan`);
    }
    this.tugas.splice(index, 1);
    return {
      status: 'success',
      msg: `Tugas dengan id ${id} berhasil dihapus`,
    };
  }
}

