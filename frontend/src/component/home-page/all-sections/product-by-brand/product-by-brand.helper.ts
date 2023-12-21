import { ApiHelper } from "@/helpers/api.helper";
import { EFieldBrand, IBrand } from "@/model/brand.model";
import { IPaginationResult } from "@/model/common.model";

export const getAllBrands = async (
  type?: EFieldBrand
): Promise<IPaginationResult<IBrand>> => {
  const params = new URLSearchParams();
  if (type) {
    params.append("type", type);
  }

  const response = await ApiHelper.get("/api/v1/brand" + params.toString());

  return response.data;
};

export const getProductByBrand = async (id: number) => {
  const response = await ApiHelper.get(`/api/v1/product/brand/${id}`);

  return response.data;
};
