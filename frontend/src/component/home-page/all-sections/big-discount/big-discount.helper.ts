import { ApiHelper } from "@/helpers/api.helper";
import { IPaginationResult } from "@/model/common.model";
import { IProduct } from "@/model/product.model";

export const getBigDiscount = async (): Promise<
  IPaginationResult<IProduct>
> => {
  const response = await ApiHelper.get("/api/v1/product/big-discount");
  return response.data;
};
