import { FC } from "react";
import Page from "./navigation-bar/pages/Page.component";
import { menu } from "./header.constant";
import { Stack } from "@mui/material";
import Logo from "@/assets/logo.svg";
import Search from "./search/Search.component";
import UserAccount from "./user-account/UserAccount.component";
import ShoppingCart from "./shopping-cart/ShoppingCart.component";
import CategoryMenu from "./category-menu/CategoryMenu.component";

const Header: FC = () => {
  return (
    <Stack flexDirection="column" gap="8px" marginTop="8px">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="80px"
      >
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <Search />

        <Stack flexDirection="row" gap="20px">
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
    </Stack>
  );
};

export default Header;
