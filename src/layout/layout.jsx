import { Outlet } from "react-router";

import { Navbar, Footer } from "./components";


export const Layout = () => {
    return (
        <div className="container-main">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
