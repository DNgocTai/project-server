import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  password: string;

  @IsOptional()
  avatarUrl: string;

  @IsOptional()
  phoneNumber: string;

  @IsOptional()
  role?: string;
}
