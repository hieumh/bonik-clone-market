import { FC } from "react";
import Page from "./navigation-bar/pages/Page.component";
import { menu } from "./header.constant";
import { Box, Stack } from "@mui/material";
import Logo from "@/assets/logo.svg";
import Search from "./search/Search.component";
import UserAccount from "./user-account/UserAccount.component";
import ShoppingCart from "./shopping-cart/ShoppingCart.component";
import CategoryMenu from "./category-menu/CategoryMenu.component";
import SliderBanner from "./slider/SliderBanner.component";

const Header: FC = () => {
  return (
    <Stack flexDirection="column" gap=".5rem" marginTop=".5rem">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="5rem"
      >
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <Search />

        <Stack flexDirection="row" gap="1.25rem">
          <UserAccount />

          <ShoppingCart />
        </Stack>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between">
        <CategoryMenu />

        <Stack flexDirection="row">
          {menu.map((menuItem) => (
            <Page {...menuItem} />
          ))}
        </Stack>
      </Stack>

      <Box
        sx={{
          marginLeft: "30%",
          minHeight: "34rem",
        }}
      >
        <SliderBanner />
      </Box>
    </Stack>
  );
};

export default Header;
