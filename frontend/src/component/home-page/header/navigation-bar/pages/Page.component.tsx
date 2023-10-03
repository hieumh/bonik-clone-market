import {
  Card,
  ListItemText,
  List,
  ListItemButton,
  Box,
  ListItemIcon,
  Typography,
  ListItem,
  Button,
} from "@mui/material";
import { FC } from "react";
import { TMenuOption } from "../../header.model";
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
      <Button onMouseEnter={handleOpen}>{title}</Button>

      {Boolean(children.length) && isOpen && (
        <Card
          sx={{
            position: "absolute",
            width: "9.375rem",
            zIndex: "10000",
          }}
        >
          <List>
            {children.map((childPage, idx) => (
              <ListItem
                key={childPage.title}
                secondaryAction={
                  !isEmpty(childPage.children) ? (
                    <ListItemIcon sx={{ minWidth: "1.5rem" }}>
                      {<ChevronRightIcon sx={{ maxWidth: "1.5rem" }} />}
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
                        fontSize: ".875rem",
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
          left="9.3125rem"
          onMouseEnter={handleEnterChild}
          onMouseLeave={handleLeaveChild}
          sx={{
            borderRadius: ".25rem",
            padding: ".375rem .625rem",
            boxShadow:
              "0rem .125rem .375rem rgba(0, 0, 0, 0.1), 0rem .25rem .75rem rgba(0, 0, 0, 0.1)",
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
