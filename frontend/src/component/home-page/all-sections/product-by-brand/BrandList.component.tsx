import useRouter from "@/hooks/user-router.hook";
import { IBrand } from "@/model/brand.model";
import { Button, Stack } from "@mui/material";
import { FC } from "react";

interface IBrandList {
  type: EFieldBrand;
}

const brandLists = [
  {
    id: 1,
    title: "Ferrari",
  },
  {
    id: 2,
    title: "Tesla",
  },
  {
    id: 3,
    title: "Bmw",
  },
  {
    id: 4,
    title: "Toyota",
  },
  {
    id: 5,
    title: "Mini",
  },
] as IBrand[];

enum EFieldBrand {
  CAR = "car",
  FASHION = "fashion",
  MOTORBIKE = "motorbike",
}

const BrandList: FC<IBrandList> = ({ type }) => {
  const { navigate } = useRouter();

  const handleViewProduct = (id: number) => () => {};

  const handleViewAll = () => {
    navigate("/brand&type=" + type);
  };

  return (
    <Stack>
      <Stack flexDirection="column" padding="1.25rem" gap=".75rem">
        {brandLists.map((brand) => (
          <Button key={brand.id} onClick={handleViewProduct(brand.id)}>
            {brand.title}
          </Button>
        ))}
      </Stack>

      <Button onClick={handleViewAll}>View All Brand</Button>
    </Stack>
  );
};

export default BrandList;
