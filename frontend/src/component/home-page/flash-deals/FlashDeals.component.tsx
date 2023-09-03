import { IProduct } from "@/model/product.model";
import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import flashDealSvg from "@/assets/flash.svg";
import ProductCard from "../product-card/ProductCard.component";

interface IFlashDeals {}

const products: IProduct[] = [
  {
    productId: 1,
    price: 5,
    description: "sony",
    rating: 4,
    categoryId: 1,
    productName: "sony phone",
  },
];

const FlashDeals: FC<IFlashDeals> = () => {
  return (
    <Box>
      <Stack flexDirection="row" gap="4px" alignItems="center" mb="24px">
        <img
          src={flashDealSvg}
          alt="flash deal"
          style={{
            width: "24px",
            height: "24px",
          }}
        />

        <Typography fontSize="25px" fontWeight="bold">
          Flash Deals
        </Typography>
      </Stack>

      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </Box>
  );
};

export default FlashDeals;
