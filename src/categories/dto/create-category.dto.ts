import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  avatarUrl: string;

  @IsOptional()
  path: string;

  @IsOptional()
  title: string;

  @IsOptional()
  status: boolean;
}
