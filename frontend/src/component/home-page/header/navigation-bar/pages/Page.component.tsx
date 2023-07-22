import {
  Card,
  ListItemText,
  List,
  ListItemButton,
  Box,
  ListItemIcon,
  Typography,
  ListItem,
} from "@mui/material";
import { FC } from "react";
import { TMenuOption } from "../../header.model";
import StyledButton from "@/common/button/StyledButton.component";
import useMenu from "@/hooks/use-menu.hook";
import useMenuMulti from "@/hooks/use-menu-multi.hook";
import { isEmpty } from "lodash";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Page: FC<TMenuOption> = ({ title, children = [] }) => {
  const { isOpen, handleOpen, handleClose } = useMenu();

  const {
    parentRef: listItemRef,
    currentMenuIdx,
    shouldShowSubMenu,
    handleEnterParent: handleHover,
    handleLeaveParent: handleLeave,
    handleEnterChild,
    handleLeaveChild,
  } = useMenuMulti<HTMLLIElement>();

  return (
    <Box
      onMouseLeave={handleClose}
      sx={{
        position: "relative",
      }}
    >
      <StyledButton onMouseEnter={handleOpen}>{title}</StyledButton>

      {Boolean(children.length) && isOpen && (
        <Card
          sx={{
            position: "absolute",
            width: "150px",
            zIndex: "10000",
          }}
        >
          <List>
            {children.map((childPage, idx) => (
              <ListItem
                key={childPage.title}
                secondaryAction={
                  !isEmpty(childPage.children) ? (
                    <ListItemIcon sx={{ minWidth: "24px" }}>
                      {<ChevronRightIcon sx={{ maxWidth: "24px" }} />}
                    </ListItemIcon>
                  ) : null
                }
                ref={listItemRef}
                onMouseEnter={handleHover(idx)}
                onMouseLeave={handleLeave}
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemText
                    sx={{
                      "& span": {
                        fontSize: "14px",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {childPage.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Card>
      )}

      {shouldShowSubMenu && !!currentMenuIdx && (
        <Box
          position="absolute"
          top={
            (currentMenuIdx as number) *
              (listItemRef?.current?.clientHeight || 0) +
            12
          }
          left="149px"
          onMouseEnter={handleEnterChild}
          onMouseLeave={handleLeaveChild}
          sx={{
            borderRadius: "4px",
            padding: "6px 10px",
            boxShadow:
              "0px 2px 6px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          zIndex={10000}
        >
          <Typography>{children?.[currentMenuIdx - 1].title}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Page;
