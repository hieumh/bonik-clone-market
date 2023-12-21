import { COLORS } from "@/constants/ui.constant";
import useRouter from "@/hooks/user-router.hook";
import { EFieldBrand, IBrand } from "@/model/brand.model";
import { THandler } from "@/model/common.model";
import { Button, Stack, styled } from "@mui/material";
import { FC } from "react";

interface IBrandList {
  type: EFieldBrand;
  brands: IBrand[];
  setCurrentBrand: THandler;
}

const BrandButton = styled(Button)(() => ({
  backgroundColor: COLORS.buttonWhite,
  color: COLORS.text,
  textAlign: "left",
  "&:hover": {
    backgroundColor: COLORS.textGrey,
    color: COLORS.text,
  },
}));

const BrandList: FC<IBrandList> = ({ type, brands, setCurrentBrand }) => {
  const { navigate } = useRouter();

  const handleViewAll = () => {
    navigate("/brand&type=" + type);
  };

  return (
    <Stack
      padding="1.25rem"
      gap="1rem"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack flexDirection="column" gap=".75rem" justifyContent="space-between">
        {brands?.map((brand) => (
          <BrandButton
            key={brand.id}
            variant="contained"
            onClick={() => setCurrentBrand(brand)}
          >
            {brand.title}
          </BrandButton>
        ))}
      </Stack>

      <BrandButton variant="contained" onClick={handleViewAll}>
        View All Brand
      </BrandButton>
    </Stack>
  );
};

export default BrandList;
