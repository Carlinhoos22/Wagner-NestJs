import { Param, Controller, Get, Delete, HttpStatus,Post, HttpCode, Body } from "@nestjs/common";
import { PaymentService } from "./payment.service";

@Controller("payments")
export class PaymentController {
    constructor( private readonly paymentService: PaymentService){}

    @Get()
    findAll() {
        return this.paymentService.findAll();
    }

    @Get(":id")
    findOne( @Param("id") id: number) {
        return this.paymentService.findOne(id);
    }

    @Delete(":id")
    deleteFunction( @Param("id") id:number) {
        return this.paymentService.delete(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() input){
        return this.paymentService.create(input);
    }
};