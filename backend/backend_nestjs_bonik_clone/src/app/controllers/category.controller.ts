import {
  Controller,
  Get,
  Injectable,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { TCategoriesResponse } from 'src/common/interfaces/category.interface';
import { MapInterceptor } from '@automapper/nestjs';
import { Category } from '../models/category.model';
import { CategoryDto } from '../dtos/category.dto';
import { AuthGuard } from '@nestjs/passport';
import { ICategory } from '@prisma/client';

@Injectable()
@Controller('category')
@UseGuards(AuthGuard('jwt'))
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @UseInterceptors(MapInterceptor(Category, CategoryDto))
  async findAllCategory(): TCategoriesResponse {
    return await this.categoryService.findAllCategory();
  }

  @Get('top-categories')
  async findTopCategory(): Promise<Array<ICategory | null>> {
    return await this.categoryService.findTopCategory();
  }
}
