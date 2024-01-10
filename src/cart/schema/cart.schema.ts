import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Product, ProductSchema } from 'src/products/schema/product.schema';

export type CartDocument = HydratedDocument<Cart>;

@Schema({ timestamps: true })
export class Cart {
  @Prop({ type: mongoose.Schema.ObjectId, required: [true] })
  userId: ObjectId;

  @Prop([{ type: mongoose.Schema.ObjectId, required: [true] }])
  productId: ObjectId;

  @Prop({ default: 1 })
  quantity: number;

  @Prop({ default: 0 })
  total: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
