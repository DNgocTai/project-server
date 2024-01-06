import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './schema/cart.schema';
import { Model } from 'mongoose';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
  ) {}
  create(createCartDto: CreateCartDto) {
    const createdCart = this.cartModel.create(createCartDto);
    return createdCart;
  }

  findAll() {
    return this.cartModel.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'product',
        },
      },
    ]);
  }

  findOne(id: string) {
    return this.cartModel.findOne({ _id: id });
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    const updatedCart = this.cartModel.findOneAndUpdate(
      { _id: id },
      updateCartDto,
    );
    return updatedCart;
  }

  remove(id: string) {
    return this.cartModel.findOneAndDelete({ _id: id });
  }
}
