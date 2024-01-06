import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './schema/payment.schema';
import { Model } from 'mongoose';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment.name) private paymentMdl: Model<Payment>) {}

  create(createPaymentDto: CreatePaymentDto) {
    const createPayment = this.paymentMdl.create(createPaymentDto);
    return createPayment;
  }

  findAll() {
    return this.paymentMdl.find();
  }

  findOne(id: string) {
    return this.paymentMdl.findOne({ _id: id });
  }

  findByUserId(userId: string) {
    return this.paymentMdl.find({ userId });
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    const updatedPayment = this.paymentMdl.findOneAndUpdate(
      { _id: id },
      updatePaymentDto,
    );
    return updatedPayment;
  }

  remove(id: string) {
    return this.paymentMdl.findOneAndDelete({ _id: id });
  }
}
