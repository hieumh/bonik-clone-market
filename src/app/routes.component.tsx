import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { mainRoutes } from './routes.constant';

const router = createBrowserRouter(mainRoutes);

export default router;
