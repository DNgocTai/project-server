import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schema/category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = this.categoryModel.create(createCategoryDto);
    return createCategoryDto;
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find();
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findOne({ _id: id });
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const updatedCategory = this.categoryModel.findByIdAndUpdate(
      { _id: id },
      updateCategoryDto,
    );
    return updatedCategory;
  }

  async remove(id: string) {
    const deletedCategory = this.categoryModel.findByIdAndDelete({ _id: id });
    return deletedCategory;
  }

  addProductToCategory(product) {
    return this.categoryModel.findOne({ name: product.name });
  }
}
