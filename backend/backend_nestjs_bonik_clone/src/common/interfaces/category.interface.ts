import * as Joi from 'joi';
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

export const shoppingCartMappingSchema = Joi.object({
  cartProductId: Joi.number().required(),
  type: Joi.string().required(),
});
