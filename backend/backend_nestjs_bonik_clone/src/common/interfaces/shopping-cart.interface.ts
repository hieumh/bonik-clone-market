import { ICartProduct } from '@prisma/client';
import { IPaginationResult } from '../helpers/pagination.helper';

export type TShoppingCartsResponse = Promise<IPaginationResult<ICartProduct>>;
export type TShoppingCartResponse = Promise<ICartProduct>;
