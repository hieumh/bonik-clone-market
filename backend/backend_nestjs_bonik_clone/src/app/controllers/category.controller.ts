import {
  Controller,
  Get,
  Injectable,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import {
  TCategoriesResponse,
  TTopBestCategories,
} from 'src/common/interfaces/category.interface';
import { MapInterceptor } from '@automapper/nestjs';
import { Category } from '../models/category.model';
import { CategoryDto } from '../dtos/category.dto';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
@Controller('category')
@UseGuards(AuthGuard('jwt'))
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  @UseInterceptors(MapInterceptor(Category, CategoryDto))
  async findAllCategory(): TCategoriesResponse {
    return await this.categoryService.findAllCategory();
  }

  @Get('top-categories')
  async findTopCategory(): TTopBestCategories {
    return await this.productService.findTopBestCategory();
  }
}
