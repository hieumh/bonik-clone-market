import { FC, Ref, useRef } from "react";
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
  Button,
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

  const categoriesRef = useRef<HTMLButtonElement>(null);

  return (
    <Stack
      sx={{
        position: "relative",
        maxWidth: "18.75rem",
      }}
    >
      <Stack
        flexDirection="column"
        alignItems="flex-start"
        gap=".5rem"
        ref={categoriesRef}
      >
        <Button startIcon={<WidgetsIcon />} endIcon={<KeyboardArrowDownIcon />}>
          Categories
        </Button>

        <Card
          sx={{
            width: "17.5rem",
          }}
        >
          <List
            sx={{
              position: "absolute",
              top: "3.125rem",
              width: `${categoriesRef.current?.clientWidth}px`,
              boxShadow:
                "0 .25rem .375rem rgba(0, 0, 0, 0.1), 0 .0625rem .1875rem rgba(0, 0, 0, 0.08)",
            }}
          >
            {CATEGORY_MENU.map((menuItem, idx) => (
              <ListItemButton
                ref={listItemRef}
                key={menuItem.index}
                component="div"
                onMouseEnter={handleHover(idx)}
                onMouseLeave={handleLeave}
              >
                <ListItemIcon sx={{ minWidth: "2.5rem" }}>
                  {menuItem.icon}
                </ListItemIcon>

                <ListItemText
                  sx={{
                    "& span": {
                      fontSize: ".875rem",
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
          width="31.25rem"
          left={
            categoriesRef.current?.clientWidth
              ? categoriesRef.current?.clientWidth + 2 + "px"
              : 0
          }
          onMouseEnter={handleEnterChild}
          borderRadius=".25rem"
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
