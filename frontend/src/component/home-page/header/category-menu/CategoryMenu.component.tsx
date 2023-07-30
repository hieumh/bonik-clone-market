import { FC, Ref, useRef } from "react";
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

  const categoriesRef = useRef<HTMLButtonElement>(null);

  return (
    <Stack
      sx={{
        position: "relative",
        maxWidth: "300px",
      }}
    >
      <Stack
        flexDirection="column"
        alignItems="flex-start"
        gap="8px"
        ref={categoriesRef}
      >
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
          <List
            sx={{
              position: "absolute",
              top: "50px",
              width: `${categoriesRef.current?.clientWidth}px`,
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
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
          left={
            categoriesRef.current?.clientWidth
              ? categoriesRef.current?.clientWidth + 2 + "px"
              : 0
          }
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
