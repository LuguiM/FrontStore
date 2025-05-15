import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar, Footer } from "./components";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export const Layout = () => {
    return (
        <div className="container-main">
            <Navbar />
            <div className="container-spacing">
                <ScrollToTop />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
