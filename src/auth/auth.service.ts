import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isMatch = await bcrypt.compare(pass, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user?._id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async resetPass(username: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user.username !== username) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user?._id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
