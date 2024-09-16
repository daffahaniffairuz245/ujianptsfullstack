import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    nama: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    tempat_lahir: string;

    @IsNotEmpty()
    tanggal_lahir: Date;

    @IsNotEmpty()
    nisn: string;

    @IsNotEmpty()
    nik: string;

    @IsNotEmpty()
    alamat: string;
}