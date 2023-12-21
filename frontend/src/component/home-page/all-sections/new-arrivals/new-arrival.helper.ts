import { ApiHelper } from "@/helpers/api.helper";

export const getAllNewArrivals = async () => {
  const response = await ApiHelper.get("/api/v1/product/new-arrivals");

  return response.data;
};
