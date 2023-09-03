import { ICartProduct } from '@prisma/client';

export class ShoppingCartProductMapping implements ICartProduct {
  cartProductId: number;
  cartId: number;
  productId: number;
  quantity: number;
  userId: number;
}
