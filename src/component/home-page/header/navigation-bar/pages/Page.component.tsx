import { Box, ListItemText, Menu, MenuItem } from '@mui/material';
import { FC } from 'react';
import { TMenuOption } from '../../header.model';
import SubPage from '../sub-page/SubPage.component';
import StyledButton from '@/common/button/StyledButton.component';
import useMenu from '@/hooks/use-menu.hook';

const Page: FC<TMenuOption> = ({ title, children = [] }) => {
  const { anchorEl, isOpen, handleOpen, handleClose } = useMenu();

  return (
    <Box onMouseLeave={handleClose}>
      <StyledButton onMouseEnter={handleOpen}>{title}</StyledButton>

      {Boolean(children.length) && (
        <Menu
          open={isOpen}
          anchorEl={anchorEl}
          disablePortal
          MenuListProps={{
            onMouseLeave: handleClose,
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
          PaperProps={{
            sx: {
              width: '200px',
              borderRadius: '4px',
            },
          }}
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
      )}
    </Box>
  );
};

export default Page;
