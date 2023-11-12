import { FC } from "react";
import flashDealSvg from "@/assets/flash.svg";
import ProductCard from "../../product-card/ProductCard.component";
import { useQuery } from "@tanstack/react-query";
import { getFlashDeals } from "./flash-deals.helper";
import {
  FLASH_DEAL_KEY,
  SHOPPING_CART_KEY,
} from "@/constants/server-state.constant";
import { IPaginationResult } from "@/model/common.model";
import { IShoppingCart } from "@/model/shopping-cart.model";
import { getAllCart } from "../../header/shopping-cart/shopping-cart.helper";
import { IFlashDeal } from "@/model/flash-deal.model";
import Section from "../../Section.component";

const FlashDeals: FC = () => {
  const { data: products, isError } = useQuery<IPaginationResult<IFlashDeal>>(
    [FLASH_DEAL_KEY],
    () => getFlashDeals(),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: shoppingCarts } = useQuery<IPaginationResult<IShoppingCart>>(
    [SHOPPING_CART_KEY],
    () => getAllCart(),
    {
      refetchOnWindowFocus: false,
    }
  );

  const getCartProductById = (productId: number): IShoppingCart | undefined => {
    return shoppingCarts?.items?.find((cart) => cart.productId === productId);
  };

  return (
    <Section srcIcon={flashDealSvg} title="Flash Deals" hasError={isError}>
      {products &&
        products.items.map((product) => (
          <ProductCard
            flashDealProduct={product}
            cartProduct={getCartProductById(product.productId)}
          />
        ))}
    </Section>
  );
};

export default FlashDeals;
