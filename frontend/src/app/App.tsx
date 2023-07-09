import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import store from '../store/store';
import router from './routes.component';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store} children={<RouterProvider router={router} />} />
  </QueryClientProvider>
);

export default App;
