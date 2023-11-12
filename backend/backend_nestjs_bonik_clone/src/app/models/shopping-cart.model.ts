import { ICartProduct } from '@prisma/client';

export type TShoppingCartCreate = Pick<ICartProduct, 'productId'>;
