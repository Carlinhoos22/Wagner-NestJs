import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'blog',
    autoLoadEntities: true,
    synchronize: true,
  }),
  ProductsModule],
  //imports: [ProductsModule, UsersModule, PaymentModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
