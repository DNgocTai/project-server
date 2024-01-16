export class CreateCartDto {
  userId: string;
  fullName: string;
  phoneNumber: string;
  products: [object];
  address: string;
  totalQty: string;
  totalAmount: string;
}
