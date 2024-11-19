import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "@/redux/store";
import theme from "@/styles/muiTheme";
import RouterProvider from "@/containers/providers/RouterProvider/RouterProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
