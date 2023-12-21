import { FC } from "react";
import categorySvg from "@/assets/category.svg";
import { TOP_RATING_KEY } from "@/constants/server-state.constant";
import { getTopRatings } from "./top-rating.helper";
import { useQuery } from "@tanstack/react-query";
import ProductRatingCard from "./ProductRatingCard.component";
import Section from "../../Section.component";

const DEFAULT_TOP_RATING_COUNT = 3;

const TopRatings: FC = () => {
  const { data: topRatings, isError } = useQuery(
    [TOP_RATING_KEY],
    () => getTopRatings(DEFAULT_TOP_RATING_COUNT),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section srcIcon={categorySvg} title="Top Ratings" hasError={isError}>
      {topRatings &&
        topRatings.map((product) => (
          <ProductRatingCard key={product.productId} product={product} />
        ))}
    </Section>
  );
};

export default TopRatings;
