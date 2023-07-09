import { RouteObject } from 'react-router-dom';
import Home from '../component/home-page/Home.page';
import Product from '../component/product/Product.page';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'product',
        element: <Product />,
      },
    ],
  },
];
