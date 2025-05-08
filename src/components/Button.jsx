import { NavLink } from "react-router"

export const Button = ({ isLink, outlined, label }) => {
    return (
        isLink ? (
            <NavLink to="/products" className={outlined ? "button-outlined" : "button-base"}>
                {label}
            </NavLink>
        ) : (
            <button className={outlined ? "button-outlined" : "button-base"}>
                {label}
            </button>
        )
    )
}
