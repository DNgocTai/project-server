import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { CategoriesService } from 'src/categories/categories.service';
import {
  Category,
  CategorySchema,
} from 'src/categories/schema/category.schema';
import { CartService } from 'src/cart/cart.service';
import { Cart, CartSchema } from 'src/cart/schema/cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CategoriesService],
})
export class ProductsModule {}
