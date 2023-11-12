import { COLORS } from "@/constants/ui.constant";
import { roundForCost } from "@/helpers/common.helper";
import { IProduct } from "@/model/product.model";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface IProductRatingCardProps {
  product: IProduct;
}

const ProductRatingCard: FC<IProductRatingCardProps> = ({ product }) => {
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

      <CardContent
        sx={{
          padding: "1rem",
          textAlign: "center",
        }}
      >
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

        <Rating
          size="small"
          name="rating"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
        />

        <Typography color={COLORS.primary}>
          {roundForCost(product.price)} US$
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductRatingCard;
