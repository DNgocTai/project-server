import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import {
  Category,
  CategorySchema,
} from 'src/categories/schema/category.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop({ default: '' })
  avatarUrl: string;

  @Prop({ default: '' })
  description: string;

  @Prop()
  price: number;

  @Prop()
  star: string;

  @Prop()
  categoryName: string;

  @Prop({ default: true })
  status: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
