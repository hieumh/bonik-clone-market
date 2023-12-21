import { FC } from "react";
import Section from "../../Section.component";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/model/product.model";
import { BIG_DISCOUNT_KEY } from "@/constants/server-state.constant";
import { getBigDiscount } from "./big-discount.helper";
import ProductCard from "../new-arrivals/ProductCard.component";
import categorySvg from "@/assets/category.svg";
import { IPaginationResult } from "@/model/common.model";

const BigDiscount: FC = () => {
  const { data, isError } = useQuery<IPaginationResult<IProduct>>(
    [BIG_DISCOUNT_KEY],
    () => getBigDiscount(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section srcIcon={categorySvg} title="Big Discounts" hasError={isError}>
      {data?.items?.map((product) => (
        <ProductCard product={product} />
      ))}
    </Section>
  );
};

export default BigDiscount;
