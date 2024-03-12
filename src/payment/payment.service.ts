import { Injectable, NotFoundException } from "@nestjs/common";


@Injectable()
export class PaymentService {

    private payments = [
    {"id": 1, "name": "Paypal 1",},
    {"id": 2, "name": "Shopify 2",},
    {"id": 2, "name": "Mercado Pago 2",},
    ];

    findAll() {
        return this.payments;
    }

    findOne(id: number) {
        const product = this.payments.find((product) => product.id === +id);
        if(!product){
            throw new NotFoundException("Produto inexistente");
       }
       return this.payments[id - 1];
    }

    create(input: any) {
        this.payments.push(input)
        return input
    }

    delete(id: number) {
        const achado = this.payments.findIndex((product) => product.id === +id);
        if(achado === -1){
            throw new NotFoundException("Produto inexistente");
        }
        this.payments.splice(achado); 
    }
}