import { ApiHelper } from "@/helpers/api.helper";
import { IPaginationResult } from "@/model/common.model";
import { IFlashDeal } from "@/model/flash-deal.model";

export const getFlashDeals = async (): Promise<
  IPaginationResult<IFlashDeal>
> => {
  const response = await ApiHelper.get("/api/v1/product/flash-deal");

  return response.data;
};
