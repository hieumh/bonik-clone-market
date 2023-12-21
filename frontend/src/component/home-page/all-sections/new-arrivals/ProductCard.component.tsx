import { COLORS } from "@/constants/ui.constant";
import { IProduct } from "@/model/product.model";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface IProductCard {
  product: IProduct;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  return (
    <Card
      sx={{
        width: "17.625rem",
        mx: ".75rem",
        minHeight: "24.5rem",
      }}
    >
      <CardMedia
        component="img"
        image="https://cdn.pixabay.com/photo/2023/08/26/15/21/mushroom-8215265_1280.jpg"
        sx={{
          height: "17.625rem",
        }}
      />

      <CardContent>
        <Stack flexDirection="column" justifyContent="flex-start">
          <Typography
            fontSize=".875rem"
            noWrap
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.productName}
          </Typography>
          <Typography color={COLORS.primary}>{product.price} US$</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
