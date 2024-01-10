import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './schema/cart.schema';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    private prodSrv: ProductsService,
  ) {}
  create(createCartDto: CreateCartDto) {
    // const cartUser = this.cartModel.findOne({ userId: createCartDto.userId });
    // const product = this.prodSrv.findOne(createCartDto.productId);
    // if (cartUser) {
    //   throw new BadRequestException('Cart already exists for the user');
    // }
    // const obj = [{ ...createCartDto, product: [{ ...product }] }];
    return this.cartModel.create(createCartDto);
  }

  findAllByUser(userId: any) {
    const obj = new ObjectId(userId);
    return this.cartModel.find({ userId: obj });
  }

  findAll() {
    return this.cartModel.find();
    // return this.cartModel.aggregate([
    //   {
    //     $lookup: {
    //       from: 'products',
    //       localField: 'productId',
    //       foreignField: '_id',
    //       as: 'products',
    //     },
    //   },
    // ]);
    // return this.cartModel.find();
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
