import { FC } from "react";
import categorySvg from "@/assets/category.svg";
import CategoryCard from "./CategoryCard.component";
import { ICategory } from "@/model/category.model";
import { useQuery } from "@tanstack/react-query";
import { TOP_CATEGORY_KEY } from "@/constants/server-state.constant";
import { getTopCategories } from "./top-category.helper";
import Section from "../../Section.component";

const TopCategory: FC = () => {
  const { data: categories, isError } = useQuery<ICategory[]>(
    [TOP_CATEGORY_KEY],
    () => getTopCategories(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section srcIcon={categorySvg} title="Top Category" hasError={isError}>
      {categories &&
        categories.map((category) => (
          <CategoryCard key={category.categoryId} category={category} />
        ))}
    </Section>
  );
};

export default TopCategory;
