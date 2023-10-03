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
      <Stack flexDirection="row" gap=".25rem" alignItems="center" mb="1.5rem">
        <img
          src={flashDealSvg}
          alt="flash deal"
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />

        <Typography fontSize="1.625rem" fontWeight="bold">
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
