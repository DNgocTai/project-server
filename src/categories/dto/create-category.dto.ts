import { IsBoolean, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  avatarUrl: string;

  products: object[];
}
