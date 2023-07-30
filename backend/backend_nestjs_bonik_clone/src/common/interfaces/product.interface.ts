import { FlashDealDto } from 'src/app/dtos/flash-deal.dto';
import { ProductDto } from 'src/app/dtos/product.dto';
import { IPaginationResult } from '../helpers/pagination.helper';

export type TProductsResponse = Promise<Array<ProductDto>>;
export type TProductsPaginationResult = Promise<IPaginationResult<ProductDto>>;
export type TProductResponse = Promise<ProductDto>;
export type TFlashDealsResponse = Promise<IPaginationResult<FlashDealDto>>;
