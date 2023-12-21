import { ApiHelper } from "@/helpers/api.helper";
import { ICategory } from "@/model/category.model";

export const getTopCategories = async (): Promise<ICategory[]> => {
  const response = await ApiHelper.get("/api/v1/category/top-categories");

  return response.data;
};
