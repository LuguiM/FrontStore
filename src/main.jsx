import * as React from "react";
import ReactDOM from "react-dom/client";
import './assets/index.css'
import Root from "./routes/root";
import App from "./App";
import ErrorPage from "./error-page";
import MenClothing from "./views/menClothing";
import WomanClothing from "./views/womanClothing";
import Jewelery from "./views/jewelery";
import Electronics from "./views/electronics";





import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path:"/category/men's clothing",
        errorElement: <ErrorPage />,
        element: <MenClothing />,
    },
    {
        path:"/category/women's clothing",
        errorElement: <ErrorPage />,
        element: <WomanClothing />,
    },
    {
        path:"/category/jewelery",
        errorElement: <ErrorPage />,
        element: <Jewelery />,
    },
    {
        path:"/category/electronics",
        errorElement: <ErrorPage />,
        element: <Electronics />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);