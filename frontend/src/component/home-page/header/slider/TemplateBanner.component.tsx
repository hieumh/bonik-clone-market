import { FC } from "react";
import { IBanner, IBannerProps, IBannerResponse } from "./banner.model";
import HorizontalBanner from "./horizontal-banner/HorizontalBanner.component";
import VerticalBanner from "./vertical-banner/VerticalBanner.component";
import { addToCart } from "@/helpers/product.helper";
import { toast } from "react-toastify";
import { SOMETHING_WENT_WRONG } from "@/constants/common.constant";
import { useMutation } from "@tanstack/react-query";

export interface ITemplateBanner extends Omit<IBanner, "handleShopNow"> {
  type: "vertical";
}

const TemplateBanner: FC<ITemplateBanner> = ({
  title,
  description,
  href,
  type,
  productId,
}) => {
  const { mutateAsync } = useMutation<unknown, unknown, number>({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success("Add to shopping cart successfully");
    },
    onError: () => {
      toast.error(SOMETHING_WENT_WRONG);
    },
  });

  const handleShopNow = (id: number) => {
    mutateAsync(productId);
  };

  const props: IBannerProps = {
    title,
    description,
    href,
    handleShopNow,
  };

  switch (type) {
    case "vertical":
      return <VerticalBanner {...props} />;
    default:
      return <HorizontalBanner {...props} />;
  }
};

export default TemplateBanner;
