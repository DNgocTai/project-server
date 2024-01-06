import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Cart, CartSchema } from 'src/cart/schema/cart.schema';
import { CartService } from 'src/cart/cart.service';
import { PaymentModule } from 'src/payment/payment.module';
import { Payment, PaymentSchema } from 'src/payment/schema/payment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
