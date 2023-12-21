import { ApiHelper } from "@/helpers/api.helper";
import { IPaginationResult } from "@/model/common.model";
import { IShoppingCart } from "@/model/shopping-cart.model";

export const getAllCart = async (): Promise<
  IPaginationResult<IShoppingCart>
> => {
  const response = await ApiHelper.get("/api/v1/shopping-cart");

  return response.data;
};

export const createShoppingCart = async (
  productId?: number
): Promise<IShoppingCart | null> => {
  if (productId === 0) {
    return null;
  }

  const response = await ApiHelper.post("api/v1/shopping-cart", {
    data: {
      productId,
    },
  });

  return response.data;
};

export const updateProductQuantity = async (
  shoppingCartId: number,
  quantity: number
): Promise<IShoppingCart> => {
  const response = await ApiHelper.put(
    "/api/v1/shopping-cart/" + shoppingCartId,
    {
      data: {
        quantity,
      },
    }
  );
  return response.data;
};

export const removeShoppingCart = async (
  shoppingCartId: number
): Promise<IShoppingCart> => {
  const response = await ApiHelper.delete(
    "/api/v1/shopping-cart/" + shoppingCartId
  );
  return response.data;
};
