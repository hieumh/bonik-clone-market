import { FC } from "react";
import { IBanner } from "./banner.model";
import HorizontalBanner from "./horizontal-banner/HorizontalBanner.component";
import VerticalBanner from "./vertical-banner/VerticalBanner.component";

export interface ITemplateBanner extends Omit<IBanner, "handleShopNow"> {
  type: "vertical";
}

const TemplateBanner: FC<ITemplateBanner> = ({
  title,
  description,
  href,
  type,
}) => {
  const handleShopNow = () => {
    console.log("handle shop here");
  };

  const props: IBanner = {
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
