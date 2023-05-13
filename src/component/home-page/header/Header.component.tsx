import { FC } from 'react';
import Page from './pages/Page.component';
import { menu } from './header.constant';

const Header: FC = () => {
  return (
    <div>
      <div>
        <img src="" />
      </div>
      <div>Search bar</div>
      <div>Actions here</div>

      <div>Categories</div>

      <div>
        {menu.map((menuItem) => (
          <Page {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default Header;
