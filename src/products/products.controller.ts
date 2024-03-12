import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController{
    constructor( private readonly productService: ProductsService){}

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(":id")
    findOne( @Param("id") id: number) {
        return this.productService.findOne(id);
    }

    @Delete(":id")
    deleteFunction( @Param("id") id:number) {
        return this.productService.delete(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() input){
        return this.productService.create(input);
    }
};