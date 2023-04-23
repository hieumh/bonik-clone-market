import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div></div>}>
      <Route path="login" element={<div>Login</div>} />
    </Route>
  )
);

export default router;
