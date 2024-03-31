import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";

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

    @Patch(":id")
    update( @Param("id") id: number, @Body() updateProductDto: UpdateProductDto) {
        return "ATUZALIZADO COM SUCESSO";
    }

    @Delete(":id")
    deleteFunction( @Param("id") id:number) {
        return this.productService.delete(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() createProductDto: CreateProductDto){
        return this.productService.create(createProductDto);
    }


};