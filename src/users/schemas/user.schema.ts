import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  _id: string;

  @Prop()
  fullName: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: [true] })
  password: string;

  @Prop({ default: '' })
  avatarUrl: string;

  @Prop({ default: '' })
  phoneNumber: string;

  @Prop({ default: 0 })
  cash: number;

  @Prop({ default: 'GUESS' })
  role?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
