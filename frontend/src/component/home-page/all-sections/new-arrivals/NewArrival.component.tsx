import { FC } from "react";
import Section from "../../Section.component";
import { useQuery } from "@tanstack/react-query";
import { IPaginationResult } from "@/model/common.model";
import { IBrand } from "@/model/brand.model";
import { NEW_ARRIVAL_KEY } from "@/constants/server-state.constant";
import { getAllNewArrivals } from "./new-arrival.helper";
import flashDealSvg from "@/assets/flash.svg";
import ProductCard from "./ProductCard.component";
import { IProduct } from "@/model/product.model";

const NewArrival: FC = () => {
  const { data, isError } = useQuery<IPaginationResult<IProduct>>(
    [NEW_ARRIVAL_KEY],
    () => getAllNewArrivals(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section srcIcon={flashDealSvg} title="New Arrivals" hasError={isError}>
      {data?.items.map((item) => (
        <ProductCard product={item} />
      ))}
    </Section>
  );
};

export default NewArrival;
