import { Box, Button, ListItemText, Menu, MenuItem } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { TMenuOption } from '../header.model';
import SubPage from '../sub-page/SubPage.component';
import StyledButton from '@/common/button/StyledButton.component';
import useMenu from '@/hooks/use-menu.hook';

const Page: FC<TMenuOption> = ({ title, children = [] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false); // use a separate state for open/close

  function handleOpen(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
    setIsOpen(true); // set open state to true
  }

  function handleClose() {
    setAnchorEl(null);
    setIsOpen(false); // set open state to false
  }

  return (
    <Box>
      <StyledButton onMouseEnter={handleOpen}>{title}</StyledButton>

      <Menu
        open={isOpen} // use isOpen state instead of anchorEl
        anchorEl={anchorEl}
        disablePortal
        MenuListProps={{
          onMouseLeave: handleClose,
          onMouseOut: handleClose,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handleClose}
        anchorPosition={{
          top: 12,
          left: 0,
        }}
        PaperProps={{ sx: { width: '200px', borderRadius: '4px' } }}
      >
        {children.map((childPage) => (
          <MenuItem key={childPage.title}>
            <ListItemText>
              {childPage.children?.length ? (
                <SubPage {...childPage} />
              ) : (
                childPage.title
              )}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Page;
