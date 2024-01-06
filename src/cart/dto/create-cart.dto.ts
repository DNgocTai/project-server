import { ObjectId } from 'mongoose';

export class CreateCartDto {
  userId: string;
  productId: string;
  quantity?: string;
  total?: string;
}
