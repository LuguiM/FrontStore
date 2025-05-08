import { NavLink } from "react-router"

export const Button = ({ isLink, outlined, label, className }) => {
    return (
        isLink ? (
            <NavLink to="/products" className={`${className} ${outlined ? "button-outlined" : "button-base"}`}>
                {label}
            </NavLink>
        ) : (
            <button className={`${className} ${outlined ? "button-outlined" : "button-base"}`}>
                {label}
            </button>
        )
    )
}
