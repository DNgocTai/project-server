export class CreatePaymentDto {
  userId: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  phoneNumber?: string;
}
