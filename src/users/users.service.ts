import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

Injectable();
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userMdl: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.userMdl.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.userMdl.aggregate([
      {
        $lookup: {
          from: 'carts',
          localField: '_id',
          foreignField: 'userId',
          as: 'carts',
        },
      },
      {
        $lookup: {
          from: 'addresses',
          localField: '_id',
          foreignField: 'userId',
          as: 'addresses',
        },
      },
      {
        $lookup: {
          from: 'payments',
          localField: '_id',
          foreignField: 'userId',
          as: 'payments',
        },
      },
    ]);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userMdl.findOne({ username });
  }

  async findUserByEmail(username: string): Promise<any> {
    return this.userMdl
      .aggregate([
        { $match: { $or: [{ username: username }] } },
        {
          $lookup: {
            from: 'carts',
            localField: '_id',
            foreignField: 'userId',
            as: 'carts',
          },
        },
        {
          $lookup: {
            from: 'addresses',
            localField: '_id',
            foreignField: 'userId',
            as: 'addresses',
          },
        },
        {
          $lookup: {
            from: 'payments',
            localField: '_id',
            foreignField: 'userId',
            as: 'payments',
          },
        },
      ])
      .then((res) => {
        return res[0];
      });
  }

  async findUserById(id: string): Promise<User> {
    return this.userMdl.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = this.userMdl.findOneAndUpdate(
      { _id: id },
      updateUserDto,
    );
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = this.userMdl.findOneAndDelete({ _id: id });
    return deletedUser;
  }
}
