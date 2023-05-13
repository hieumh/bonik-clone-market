import { Box, Button, ListItemText, Menu, MenuItem } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { TMenuOption } from '../header.model';
import SubPage from '../sub-page/SubPage.component';

const Page: FC<TMenuOption> = ({ title, children = [] }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <Button onClick={handleClick}>{title}</Button>

      <Menu open={isOpen}>
        {children.map((childPage) => (
          <MenuItem>
            {childPage.children?.length ? (
              <SubPage {...childPage} />
            ) : (
              <ListItemText>{childPage.title}</ListItemText>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Page;
