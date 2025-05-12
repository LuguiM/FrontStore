import { NavLink } from "react-router";

export const CategoryItemBtn = ({ to, label, image, shape }) => (
    <NavLink
        to={to}
        className={`relative overflow-hidden ${shape} group`}
    >
        <img
            src={image}
            alt={label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 !bg-black/40 flex items-center justify-center text-white">
            {label}
        </div>
    </NavLink>
)