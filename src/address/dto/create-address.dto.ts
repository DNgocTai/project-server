import { ObjectId } from 'mongoose';

export class CreateAddressDto {
  name: string;
  phoneNumber: string;
  address_details: string;
}
