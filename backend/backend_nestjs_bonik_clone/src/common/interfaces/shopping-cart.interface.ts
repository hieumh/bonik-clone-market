import { ICartProduct } from '@prisma/client';

export type TShoppingCartsResponse = Promise<Array<ICartProduct>>;
export type TShoppingCartResponse = Promise<ICartProduct>;
