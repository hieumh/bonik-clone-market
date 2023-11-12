import { IProduct } from "./product.model";

export interface IFlashDeal {
  dealId: number;
  dealName: string;
  dealPrice: number;
  endDate: string;
  productId: number;
  startDate: string;
  product: IProduct;
}
