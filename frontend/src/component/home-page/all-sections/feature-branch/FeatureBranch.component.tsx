import { FC } from "react";
import Section from "../../Section.component";
import flashDealSvg from "@/assets/flash.svg";
import BrandCard from "./BrandCard.component";
import { IBrand } from "@/model/brand.model";
import { useQuery } from "@tanstack/react-query";
import { FEATURE_BRAND_KEY } from "@/constants/server-state.constant";
import { getFeatureBrand } from "./brand.helper";
import { IPaginationResult } from "@/model/common.model";

const FeatureBrand: FC = () => {
  const { data, isError } = useQuery<IPaginationResult<IBrand>>(
    [FEATURE_BRAND_KEY],
    () => getFeatureBrand(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section srcIcon={flashDealSvg} title="Feature Branch" hasError={isError}>
      {data?.items?.map((featureBrand) => (
        <BrandCard brand={featureBrand} />
      ))}
    </Section>
  );
};

export default FeatureBrand;
