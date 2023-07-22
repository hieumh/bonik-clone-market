import { FlashDealDto } from 'src/app/dtos/flash-deal.dto';
import { ProductDto } from 'src/app/dtos/product.dto';

export type TProductsResponse = Promise<Array<ProductDto>>;
export type TProductResponse = Promise<ProductDto>;
export type TFlashDealsResponse = Promise<Array<FlashDealDto>>;
