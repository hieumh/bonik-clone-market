import { ApiHelper } from "@/helpers/api.helper";
import { IBrand } from "@/model/brand.model";
import { IPaginationResult } from "@/model/common.model";

export const getFeatureBrand = async (): Promise<IPaginationResult<IBrand>> => {
  const response = await ApiHelper.get("/api/v1/brand/feature-brand");

  return response.data;
};
