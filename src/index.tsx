import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "@/containers/providers/RouterProvider/RouterProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
);
