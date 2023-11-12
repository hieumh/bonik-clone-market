import { ApiHelper } from "@/helpers/api.helper";
import { encodePath } from "@/helpers/common.helper";
import { IProduct } from "@/model/product.model";

export const getTopRatings = async (take: number): Promise<IProduct[]> => {
  const response = await ApiHelper.get(
    encodePath("/api/v1/product/top-ratings", {
      take,
    })
  );

  return response.data;
};
