import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {Layout} from "./layout/layout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: <div>Homde</div> },
    ]
  },

],
  {
    basename: "/FrontStore"
  }
);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);