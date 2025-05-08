import { createBrowserRouter } from "react-router";
import { Layout } from "../layout/layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: <div>Homde</div> },
      {
        path:"products",
        element: <div>Products</div>
      },
      {
        path: "categories",
        element: <div>Categories</div>
      }
    ]
  },

],
  {
    basename: "/FrontStore"
  }
);