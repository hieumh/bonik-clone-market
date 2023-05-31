import { FC } from "react";
import Page from "./navigation-bar/pages/Page.component";
import { menu } from "./header.constant";
import { Stack } from "@mui/material";
import Logo from "@/assets/logo.svg";
import Search from "./search/Search.component";

const Header: FC = () => {
  return (
    <Stack>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <Search />
      <div>Actions here</div>
      <div>Categories</div>

      <Stack flexDirection="row" justifyContent="flex-end">
        {menu.map((menuItem) => (
          <Page {...menuItem} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Header;
