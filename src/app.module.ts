import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CoreModule } from './core/core.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CoreModule,
    ProductsModule,
    CategoriesModule,
    MongooseModule.forRoot(
      'mongodb+srv://dainndinh:NOBskPG2hFhjhXs7@grocery-coffee-db.hvuq6lz.mongodb.net/',
      { dbName: 'grocery-coffee' },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
