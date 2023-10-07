import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "../store/store";
import router from "./routes.component";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./app.theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Provider store={store} children={<RouterProvider router={router} />} />
      <ToastContainer />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
