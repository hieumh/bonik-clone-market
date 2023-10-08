import { ApiHelper } from "@/helpers/api.helper";

export const getBanner = async () => {
  const response = await ApiHelper.get("api/v1/banner");

  return response.data;
};
