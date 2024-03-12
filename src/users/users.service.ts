import {Body, Get, Injectable, NotFoundException} from "@nestjs/common";

@Injectable()
export class UsersService {
    private users = [
    {"id": 1, "user": "Carlos", "active": true},
    {"id": 2, "user": "Elysson", "active": true},
    {"id": 3, "user": "Welligton", "active": false},
    ]

    findAll() {
        return this.users;
    }

    findOne( id: number ) {
        const user = this.users.find((user) => user.id === +id);
        if(!user) {
            throw new NotFoundException("Usuário não existe!")
        }
        return this.users[id - 1];
    }

    create( input ) {
        this.users.push(input)
        return input
    }

    delete( id: number ) {
        const achado = this.users.findIndex((user) => user.id === +id)
        if(achado === -1) {
            throw new NotFoundException("Não encontrado, error!")
        }
        this.users.splice(achado);
    }    
}