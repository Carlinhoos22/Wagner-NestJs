import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
    constructor( private readonly userService: UsersService ) {}

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(":id")
    finOne( @Param("id") id: number ) {
        return this.userService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create( @Body() input ) {
        return this.userService.create(input);
    }

    @Delete(":id")
    deleteFunction( @Param("id") id: number ) {
        return this.userService.delete(id);
    }

}
