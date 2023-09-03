import { ApiHelper } from "@/helpers/api.helper";
import { encodePath } from "@/helpers/common.helper";

export const searchRequest = async (
  searchParams?: string,
  category?: string
) => {
  if (!searchParams || !category) return null;

  const response = await ApiHelper.get(
    encodePath(`api/v1/product/search`, { searchText: searchParams, category })
  );

  return response.data;
};
