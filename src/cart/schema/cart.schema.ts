import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Product, ProductSchema } from 'src/products/schema/product.schema';

export type CartDocument = HydratedDocument<Cart>;

@Schema({ timestamps: true })
export class Cart {
  @Prop({ type: mongoose.Schema.ObjectId, required: [true] })
  userId: ObjectId;

  @Prop({ require: true })
  fullName: string;

  @Prop()
  phoneNumber: string;

  @Prop([{ type: Object, required: [true], default: [] }])
  products: [Object];

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  totalQty: number;

  @Prop({ required: true })
  totalAmount: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
