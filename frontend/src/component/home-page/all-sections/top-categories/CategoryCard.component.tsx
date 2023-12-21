import { FC } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { ICategory } from "@/model/category.model";
import { detectUnitByNum } from "@/helpers/common.helper";
import { COLORS } from "@/constants/ui.constant";

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard: FC<ICategoryCardProps> = ({ category }) => {
  const { categoryName, orderWithIntWeek, srcImg } = category;

  const orderWithInWeek = `${detectUnitByNum(
    orderWithIntWeek
  )} orders this week`;

  return (
    <Box
      width="24rem"
      height="9.5rem"
      position="relative"
      padding="1rem"
      sx={{
        backgroundColor: "white",
        boxShadow: COLORS.textGrey + " 0rem .0625rem .1875rem;",
        borderRadius: ".5rem",
      }}
    >
      <Chip
        component="div"
        sx={{
          position: "absolute",
          top: "1.125rem",
          left: "1.125rem",
        }}
        color="secondary"
        label={categoryName}
      />

      <img
        // src={srcImg}
        src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=640&q=75"
        alt={categoryName}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Chip
        component="div"
        sx={{
          position: "absolute",
          top: "1.125rem",
          right: "1.125rem",
          backgroundColor: COLORS.iceCream,
        }}
        label={orderWithInWeek}
      />
    </Box>
  );
};

export default CategoryCard;
