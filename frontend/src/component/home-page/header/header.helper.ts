import { ApiHelper } from "@/helpers/api.helper";
import { encodePath } from "@/helpers/common.helper";

interface IProduct {}

export const searchRequest = async (
  searchParams?: string,
  category?: string
): Promise<IProduct[] | null> => {
  if (!searchParams || !category) return null;

  const response = await ApiHelper.get(
    encodePath(`api/v1/product/search`, { searchText: searchParams, category })
  );

  return response.data;
};
