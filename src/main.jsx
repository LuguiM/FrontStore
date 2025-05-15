import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/index";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


if (window.location.pathname === "/") {
  window.location.replace("/FrontStore");
}


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);