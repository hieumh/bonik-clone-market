import { Injectable } from '@nestjs/common';
import { ICategory, PrismaClient } from '@prisma/client';
import { ProductService } from './product.service';
import { uniq, map, find, take } from 'lodash';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly productService: ProductService,
  ) {}

  async findAllCategory(): Promise<Array<ICategory>> {
    return await this.prismaClient.iCategory.findMany();
  }

  async findTopCategory(
    noOfTopCategory: number = 3,
  ): Promise<Array<ICategory>> {
    const allCategories = await this.findAllCategory();
    const topBestSellerProduct = await this.productService.findTopBestSeller();

    const topCategory = take(
      map(
        uniq(topBestSellerProduct.map((product) => product.categoryId)),
        (id) => find(allCategories, (category) => category.id === id),
      ),
      noOfTopCategory,
    );

    return topCategory;
  }
}
