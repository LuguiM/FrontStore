import { NavLink } from "react-router"

export const Button = ({ isLink, outlined, label, className }) => {
    const isLinkString = typeof isLink === "string";
    const link = isLinkString ? isLink : "/products";

    return (
        isLink ? (
            <NavLink to={link} className={`${className} ${outlined ? "button-outlined" : "button-base"}`}>
                {label}
            </NavLink>
        ) : (
            <button className={`${className} ${outlined ? "button-outlined" : "button-base"}`}>
                {label}
            </button>
        )
    )
}
