import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
  @Prop()
  name: string;

  @Prop({ default: '' })
  avatarUrl: string;

  @Prop({ default: '' })
  path: string;

  @Prop({ default: '' })
  title: string;

  @Prop({ default: false })
  status: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
