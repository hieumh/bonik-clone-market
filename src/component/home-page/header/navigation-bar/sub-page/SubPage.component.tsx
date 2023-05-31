import {
  Box,
  Button,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { TMenuOption } from '../header.model';
import useMenu from '@/hooks/use-menu.hook';
import StyledButton from '@/common/button/StyledButton.component';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// TODO: move logic from this component to Page.component
const SubPage: FC<TMenuOption> = ({ title, children = [] }) => {
  const { anchorEl, isOpen, handleOpen, handleClose } = useMenu();

  return (
    <>
      <Stack
        onClick={handleOpen}
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography>{title}</Typography>

        <ArrowRightIcon />
      </Stack>

      <Menu
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 200,
          vertical: 'top',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 0,
        }}
        onClose={handleClose}
      >
        {children.map((childPage) => (
          <MenuItem>
            <ListItemText>{childPage.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SubPage;
