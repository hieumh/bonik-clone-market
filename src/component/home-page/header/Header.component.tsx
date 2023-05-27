import { FC } from 'react';
import Page from './pages/Page.component';
import { menu } from './header.constant';
import { Stack } from '@mui/material';

const Header: FC = () => {
  return (
    <div>
      <div>
        <img src="" />
      </div>
      <div>Search bar</div>
      <div>Actions here</div>

      <div>Categories</div>

      <Stack flexDirection="row" justifyContent="flex-end">
        {menu.map((menuItem) => (
          <Page {...menuItem} />
        ))}
      </Stack>
    </div>
  );
};

export default Header;
