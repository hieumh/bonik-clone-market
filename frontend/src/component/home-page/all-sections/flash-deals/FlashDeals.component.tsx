import { FC } from "react";
import flashDealSvg from "@/assets/flash.svg";
import ProductCard from "../../product-card/ProductCard.component";
import { useQuery } from "@tanstack/react-query";
import { getFlashDeals } from "./flash-deals.helper";
import { FLASH_DEAL_KEY } from "@/constants/server-state.constant";
import { IPaginationResult } from "@/model/common.model";
import { IFlashDeal } from "@/model/flash-deal.model";
import Section from "../../Section.component";

const FlashDeals: FC = () => {
  const { data: flashDeals, isError } = useQuery<IPaginationResult<IFlashDeal>>(
    [FLASH_DEAL_KEY],
    () => getFlashDeals(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section srcIcon={flashDealSvg} title="Flash Deals" hasError={isError}>
      {flashDeals &&
        flashDeals.items.map((flashDeal) => (
          <ProductCard product={flashDeal.product} />
        ))}
    </Section>
  );
};

export default FlashDeals;
