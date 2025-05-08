import { createBrowserRouter } from "react-router";
import { Layout } from "../layout/layout.jsx";
import {Home, Products, Categories } from "../pages"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: <Home /> },
      {
        path:"products",
        element: <Products />
      },
      {
        path: "categories",
        element: <Categories />
      }
    ]
  },

],
  {
    basename: "/FrontStore"
  }
);