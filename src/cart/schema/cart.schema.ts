import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'users' })
  userId: string;

  @Prop()
  productId: string;

  @Prop({ default: 1 })
  quantity: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
