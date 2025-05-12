import { NavLink } from "react-router"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products"
  },
  {
    href: "/categories",
    label: "Categories"
  }
]

export const Navbar = () => {
  return (
    <div className="border-b border-gray container-spacing">
      <div className=" flex flex-col md:flex-row gap-y-2 justify-between items-center md:pb-2">
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">FrontStore</h1>
        </div>
        <nav className="flex gap-x-9 text-bodyRegular">
          {
            routes.map((route) => (
              <NavLink
                key={route.href}
                to={route.href}
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                {route.label}
              </NavLink>
            ))
          }

        </nav>
      </div>
    </div>
  )
}
