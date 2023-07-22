import { Controller, Get, Injectable } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryDto } from '../dtos/category.dto';
import { ProductService } from '../services/product.service';
import {
  TCategoriesResponse,
  TTopBestCategories,
} from 'src/common/interfaces/category.interface';

@Injectable()
@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  async findAllCategory(): TCategoriesResponse {
    return await this.categoryService.findAllCategory();
  }

  @Get('top-categories')
  async findTopCategory(): TTopBestCategories {
    return await this.productService.findTopBestCategory();
  }
}
