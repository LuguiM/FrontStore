import { NavLink } from "react-router"

export const Button = ({ isLink, outlined, label, click, className }) => {
    const isLinkString = typeof isLink === "string";
    const link = isLinkString ? isLink : "/products";

    return (
        isLink ? (
            <NavLink to={link} className={`${className} ${outlined ? "button-outlined" : "button-base"}`}>
                {label}
            </NavLink>
        ) : (
            <button onClick={click} className={`${className} ${outlined ? "button-outlined" : "button-base"}`}>
                {label}
            </button>
        )
    )
}
