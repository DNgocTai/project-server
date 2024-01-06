import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto, @Request() req: any) {
    return this.paymentService.create({
      ...createPaymentDto,
      userId: req.user.sub,
    });
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @Get('/user/:id')
  findByUserId(@Param('id') id: string) {
    return this.paymentService.findByUserId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    await this.paymentService.update(id, updatePaymentDto);
    return this.paymentService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(id);
  }
}
