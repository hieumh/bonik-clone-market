import { IProduct } from "./product.model";

export interface IShoppingCartView {
  id: number;
  quantity: number;
  srcImg: string;
  name: string;
  price: number;
}

export interface IShoppingCart {
  cartProductId: number;
  productId: number;
  quantity: number;
  userId: number;
  closeOrder: boolean;
  product: IProduct;
}
