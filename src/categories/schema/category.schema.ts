import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  avatarUrl: string;

  @Prop()
  products: any[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
