import { IShoppingCart } from '@prisma/client';

export class ShoppingCart implements IShoppingCart {
  cartId: number;
  closedOrder: boolean;
  orderDate: Date;
}
