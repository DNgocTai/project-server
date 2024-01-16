import { IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  avatarUrl: string;

  @IsString()
  price: string;

  @IsString()
  star: string;

  @IsString()
  categoryName: string;

  @IsOptional()
  status: boolean;
}
