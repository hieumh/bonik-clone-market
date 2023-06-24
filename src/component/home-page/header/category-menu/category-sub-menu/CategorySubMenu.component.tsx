import { Card, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { FASHION_CATEGORIES } from "../../header.constant";
import { THandler } from "@/model/common.model";

interface ICategorySubMenu {}

interface IItemOption {
  title: string;
  contents: string[];
}

const ItemOption: FC<IItemOption> = ({ title, contents }) => {
  return (
    <Stack flexDirection="column">
      <Typography fontWeight={600}>{title}</Typography>

      {contents.map((ct, id) => (
        <Typography key={id}>{ct}</Typography>
      ))}
    </Stack>
  );
};

const CategorySubMenu: FC<ICategorySubMenu> = () => {
  return (
    <Card>
      <Grid container spacing={2} padding="16px">
        {FASHION_CATEGORIES.map((category) => (
          <Grid key={category.name} item xs={3}>
            <ItemOption title={category.name} contents={category.children} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default CategorySubMenu;
