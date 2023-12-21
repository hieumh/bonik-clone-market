import { Grid, Stack } from "@mui/material";
import { FC, useState } from "react";
import BrandList from "./BrandList.component";
import { EFieldBrand } from "@/model/brand.model";
import ProductCard from "../../product-card/ProductCard.component";
import { useQuery } from "@tanstack/react-query";
import { BRAND_KEY, PRODUCT_BY_BRAND } from "@/constants/server-state.constant";
import { getAllBrands, getProductByBrand } from "./product-by-brand.helper";
import { SOMETHING_WENT_WRONG } from "@/constants/common.constant";

interface IProductByBrand {
  type: EFieldBrand;
}

const ProductByBrand: FC<IProductByBrand> = ({ type }) => {
  const [currentBrandId, setCurrentBrandId] = useState<number>(0);

  const { data: brands, error: brandError } = useQuery(
    [BRAND_KEY, type],
    () => getAllBrands(type),
    {
      retryOnMount: false,
      initialData: () => {
        return {
          items: [],
          totalItems: 0,
          totalPages: 0,
        };
      },
    }
  );

  const { data: product, error: productError } = useQuery(
    [PRODUCT_BY_BRAND, currentBrandId],
    () => getProductByBrand(currentBrandId),
    {
      retryOnMount: false,
    }
  );

  const handleSwitchBrand = (brandId: number) => {
    setCurrentBrandId(brandId);
  };

  if (brandError) {
    return <p>{SOMETHING_WENT_WRONG}</p>;
  }

  return (
    <Grid container>
      <Grid item xs={3}>
        <BrandList
          type={EFieldBrand.CAR}
          brands={brands.items}
          setCurrentBrand={handleSwitchBrand}
        />
      </Grid>

      {productError ? (
        <p>{SOMETHING_WENT_WRONG}</p>
      ) : (
        <Grid item xs={9}>
          <ProductCard product={product} />
        </Grid>
      )}
    </Grid>
  );
};

export default ProductByBrand;
