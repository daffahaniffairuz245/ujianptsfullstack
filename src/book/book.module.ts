import { Module } from '@nestjs/common';
import { UserController } from './book.controller.spec';
import { UserService } from './book.service';
import{ CreateUserDto }from './book.dito';
@Module({
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
export class BookModule {}
