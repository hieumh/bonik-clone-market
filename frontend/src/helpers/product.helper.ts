import { IProduct } from "@/model/product.model";
import { ApiHelper } from "./api.helper";

export const addToCart = async (productId: number): Promise<IProduct> => {
  const dataResponse = await ApiHelper.post("/api/v1/shopping-cart", {
    data: {
      productId,
      quantity: 1,
    },
  });

  return dataResponse.data;
};
