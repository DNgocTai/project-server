import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  avatarUrl: string;

  @IsOptional()
  status: boolean;
}
