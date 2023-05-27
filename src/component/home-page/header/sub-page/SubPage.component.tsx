import {
  Box,
  Button,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  styled,
} from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { TMenuOption } from '../header.model';
import useMenu from '@/hooks/use-menu.hook';

// TODO: move logic from this component to Page.component
const SubPage: FC<TMenuOption> = ({ title, children = [] }) => {
  const { anchorEl, isOpen, handleOpen, handleClose } = useMenu();

  return (
    <>
      <Typography onClick={handleOpen}>{title}</Typography>

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
