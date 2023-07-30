import { THandler } from "@/model/common.model";

export interface IBanner {
  title: string;
  description: string;
  href: string;
  handleShopNow: THandler;
}

export interface ITemplateBanner extends Omit<IBanner, "handleShopNow"> {
  type: "vertical";
}
