import { IProduct } from "@/model/product.model";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";

interface IProductCard {
  product: IProduct;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  return (
    <Card>
      <CardMedia component="img" height="194" image={product.srcImg} />

      <CardContent>
        <Typography
          noWrap
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Typography>

        <Rating
          name="rating"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
        />

        {/* sale price */}
        <Typography>{product.salePrice} US$</Typography>

        {/* real price */}
        <Typography
          sx={{
            textDecoration: "line-through",
          }}
        >
          {product.price} US$
        </Typography>

        <IconButton>
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
