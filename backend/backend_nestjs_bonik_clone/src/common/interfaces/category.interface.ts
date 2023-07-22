import { CategoryDto } from 'src/app/dtos/category.dto';

export type TCategoriesResponse = Promise<Array<CategoryDto>>;
export type TTopBestCategories = Promise<
  Array<{
    categoryId: number;
    _sum: {
      productSoldCount: number;
    };
  }>
>;
