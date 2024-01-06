import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Address } from './schema/address.schema';
import { Model } from 'mongoose';

@Injectable()
export class AddressService {
  constructor(@InjectModel(Address.name) private addressMdl: Model<Address>) {}
  async create(createAddressDto: CreateAddressDto) {
    const createdAddress = this.addressMdl.create(createAddressDto);
    return createdAddress;
  }

  async findAll() {
    return this.addressMdl.find();
  }

  async findOne(id: string) {
    return this.addressMdl.findOne({ _id: id });
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const updatedAddress = this.addressMdl.findOneAndUpdate(
      { _id: id },
      updateAddressDto,
    );
    return updatedAddress;
  }

  async remove(id: string) {
    return this.addressMdl.findOneAndDelete({ _id: id });
  }
}
