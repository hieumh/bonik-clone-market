import { THandler } from "@/model/common.model";
import { IProduct } from "@/model/product.model";

export interface IBannerResponse {
  bannerId: number;
  productId: number;
  title: string;
  description: string;
  product?: IProduct;
}

export interface IBanner {
  title: string;
  description: string;
  href: string;
  productId: number;
}

export interface ITemplateBanner extends Omit<IBanner, "handleShopNow"> {
  type: "vertical";
}

export interface IBannerProps extends Omit<IBanner, "productId"> {
  handleShopNow: THandler;
}
