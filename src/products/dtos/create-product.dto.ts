import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNumber()
    readonly id: number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    //SEM METODO
}