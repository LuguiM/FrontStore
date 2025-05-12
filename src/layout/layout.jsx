import { Outlet } from "react-router";

import { Navbar, Footer } from "./components";


export const Layout = () => {
    return (
        <div className="container-main">
            <Navbar />
            <div className="container-spacing">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
