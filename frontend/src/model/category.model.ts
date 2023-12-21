import { IProduct } from "./product.model";

export interface ICategory {
  categoryId: number;
  categoryName: string;
  srcImg: string;
  products: IProduct[];
  orderWithIntWeek: number;
}
