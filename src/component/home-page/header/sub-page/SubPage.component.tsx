import { Box, Button, ListItemText, Menu, MenuItem } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { TMenuOption } from '../header.model';

// TODO: move logic from this component to Page.component
const SubPage: FC<TMenuOption> = ({ title, children = [] }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <Button onClick={handleClick}>{title}</Button>

      <Menu open={isOpen} anchorPosition={{ top: 12, left: 10 }}>
        {children.map((childPage) => (
          <MenuItem>
            <ListItemText>{childPage.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SubPage;
