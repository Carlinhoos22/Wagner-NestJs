import {Injectable, NotFoundException} from "@nestjs/common";

@Injectable()
export class ProductsService{
    private products = [
    {"id": 1, "name": "Produto 1", "description": "Desc 1"},
    {"id": 2, "name": "Produto 2", "description": "Desc 2"},];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find((product) => product.id === +id);
        if(!product){
            throw new NotFoundException("Produto inexistente");
       }
       return this.products[id - 1];
    }

    create(input: any) {
        this.products.push(input)
        return input
    }

    delete(id: number) {
        const achado = this.products.findIndex((product) => product.id === +id);
        if(achado === -1){
            throw new NotFoundException("Produto inexistente");
        }
        this.products.splice(achado); 
    }
}