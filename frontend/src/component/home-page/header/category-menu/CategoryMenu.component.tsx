import { FC, Ref } from "react";
import StyledButton from "@/common/button/StyledButton.component";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  ListItemIcon,
  ListItemText,
  Card,
  List,
  Stack,
  ListItemButton,
  Box,
} from "@mui/material";
import { CATEGORY_MENU } from "../header.constant";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { isEmpty } from "lodash";
import CategorySubMenu from "./category-sub-menu/CategorySubMenu.component";
import useMenuMulti from "@/hooks/use-menu-multi.hook";

const CategoryMenu: FC = () => {
  const {
    parentRef: listItemRef,
    currentMenuIdx,
    shouldShowSubMenu,
    handleEnterParent: handleHover,
    handleLeaveParent: handleLeave,
    handleEnterChild,
    handleLeaveChild,
  } = useMenuMulti<HTMLDivElement>();

  return (
    <Stack
      sx={{
        position: "relative",
        maxWidth: "300px",
      }}
    >
      <Stack flexDirection="column" alignItems="flex-start" gap="8px">
        <StyledButton
          startIcon={<WidgetsIcon />}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Categories
        </StyledButton>

        <Card
          sx={{
            width: "280px",
          }}
        >
          <List>
            {CATEGORY_MENU.map((menuItem, idx) => (
              <ListItemButton
                ref={listItemRef}
                key={menuItem.index}
                component="div"
                onMouseEnter={handleHover(idx)}
                onMouseLeave={handleLeave}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {menuItem.icon}
                </ListItemIcon>

                <ListItemText
                  sx={{
                    "& span": {
                      fontSize: "14px",
                    },
                  }}
                >
                  {menuItem.name}
                </ListItemText>

                {!isEmpty(menuItem.children) && (
                  <ListItemIcon>{<ChevronRightIcon />}</ListItemIcon>
                )}
              </ListItemButton>
            ))}
          </List>
        </Card>
      </Stack>

      {shouldShowSubMenu && (
        <Box
          position="absolute"
          top={
            (currentMenuIdx as number) *
            (listItemRef?.current?.clientHeight || 0)
          }
          width="500px"
          left="101%"
          onMouseEnter={handleEnterChild}
          borderRadius="4px"
          onMouseLeave={handleLeaveChild}
          zIndex={10000}
        >
          <CategorySubMenu />
        </Box>
      )}
    </Stack>
  );
};

export default CategoryMenu;
