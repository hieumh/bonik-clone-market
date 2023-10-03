import { IProduct } from "@/model/product.model";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { COLORS } from "@/constants/ui.constant";

interface IProductCard {
  product: IProduct;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  return (
    <Card
      sx={{
        width: "17.625rem",
        mx: ".75rem",
        height: "24.5rem",
      }}
    >
      <CardMedia
        component="img"
        height="17.625rem"
        image="https://cdn.pixabay.com/photo/2023/08/26/15/21/mushroom-8215265_1280.jpg"
      />

      <CardContent
        sx={{
          padding: "1rem",
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

        <Stack flexDirection="row" gap=".375rem">
          {/* sale price */}
          <Typography color={COLORS.primary}>{product.price} US$</Typography>

          {/* real price */}
          <Typography
            color={COLORS.textGrey}
            sx={{
              textDecoration: "line-through",
            }}
          >
            {product.price} US$
          </Typography>
        </Stack>

        <IconButton>
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
