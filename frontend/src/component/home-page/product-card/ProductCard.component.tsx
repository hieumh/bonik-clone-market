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
        width: "282px",
        mx: "12px",
        height: "392px",
      }}
    >
      <CardMedia
        component="img"
        height="282px"
        image="https://cdn.pixabay.com/photo/2023/08/26/15/21/mushroom-8215265_1280.jpg"
      />

      <CardContent
        sx={{
          padding: "16px",
        }}
      >
        <Typography
          fontSize="14px"
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

        <Stack flexDirection="row" gap="6px">
          {/* sale price */}
          <Typography color={COLORS.baseColor}>{product.price} US$</Typography>

          {/* real price */}
          <Typography
            color={COLORS.textDelete}
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
