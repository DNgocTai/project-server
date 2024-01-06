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

@Module({
  imports: [
    CoreModule,
    ProductsModule,
    CategoriesModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://dainndinh:NOBskPG2hFhjhXs7@grocery-coffee-db.hvuq6lz.mongodb.net/',
      { dbName: 'grocery-coffee' },
    ),
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
