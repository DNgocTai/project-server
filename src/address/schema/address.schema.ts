import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type AddressDocument = HydratedDocument<Address>;

@Schema({ timestamps: true })
export class Address {
  @Prop({ type: mongoose.Schema.ObjectId, required: true })
  userId: ObjectId;
  @Prop()
  name: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  address_details: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
