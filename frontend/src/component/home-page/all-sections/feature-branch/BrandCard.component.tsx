import { IBrand } from "@/model/brand.model";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

interface IBrandCardProps {
  brand: IBrand;
}

const BrandCard: FC<IBrandCardProps> = ({ brand }) => {
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
        <Typography>{brand.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default BrandCard;
