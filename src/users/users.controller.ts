import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users')
export class UsersController {
  constructor(private userSrv: UsersService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<User> {
    const createdUser = this.userSrv.create(createUserDto);
    return createdUser;
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userSrv.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userSrv.findUserById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) UpdateUserDto: UpdateUserDto,
  ) {
    await this.userSrv.update(id, UpdateUserDto);
    return this.userSrv.findUserById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userSrv.remove(id);
  }
}
