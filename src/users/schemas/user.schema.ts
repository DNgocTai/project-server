import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
@Schema({ timestamps: true })
export class User {
  _id: string;
  @Prop()
  fullName: string;
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop({ default: '' })
  avatarUrl: string;
  @Prop({ default: '' })
  phoneNumber: string;
  @Prop({ default: 'USER' })
  role?: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
