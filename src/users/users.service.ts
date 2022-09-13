import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 0, name: "Marius" }, 
        { id: 1, name: "Marius" }, 
        { id: 2, name: "Justin" },
    ];

    findAll(name?: string): User[] {
        return this.users.filter(user => user.name === name);
    }

    findById(userId: number): User {
        return this.users.find(user => user.id === userId);
    }

    createUser(createUserDto: CreateUserDto): User {
        const newUser = {id: Date.now(), ...createUserDto};

        this.users.push(newUser);

        return newUser;
    }
}
