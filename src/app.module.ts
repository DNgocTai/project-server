import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CoreModule } from './core/core.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { AddressModule } from './address/address.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    CoreModule,
    ProductsModule,
    CategoriesModule,
    AuthModule,
    UsersModule,
    CartModule,
    MongooseModule.forRoot(
      'mongodb+srv://dainndinh:NOBskPG2hFhjhXs7@grocery-coffee-db.hvuq6lz.mongodb.net/',
      { dbName: 'grocery-coffee' },
    ),
    AddressModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
