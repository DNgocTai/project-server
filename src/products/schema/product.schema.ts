import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
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
