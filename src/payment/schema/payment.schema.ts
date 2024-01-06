import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: mongoose.Schema.ObjectId })
  userId: ObjectId;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  cardNumber: string;
  @Prop()
  expiryDate: string;
  @Prop()
  cvv: string;
  @Prop({ default: '' })
  phoneNumber: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
