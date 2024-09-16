import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './book.dito';

@Injectable()
export class UserService {
    private users = []; // Simpan data user di sini

    create(userDto: CreateUserDto) {
        this.users.push(userDto);
        return userDto;
    }

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    update(id: number, userDto: CreateUserDto) {
        const index = this.users.findIndex(user => user.id === id);
        if (index > -1) {
            this.users[index] = userDto;
            return userDto;
        }
        return null;
    }

    remove(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index > -1) {
            return this.users.splice(index, 1);
        }
        return null;
    }
}