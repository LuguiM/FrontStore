import { NavLink } from "react-router"
import electronics from "../../assets/infoImg/electronics.png"
import jewellery from "../../assets/infoImg/jewellery.png"
import men from "../../assets/infoImg/men.png"
import woman from "../../assets/infoImg/woman.png"

import { CategoryItemBtn } from "../../components"

const categories = [
    {
        label: "Women's clothing",
        image: woman,
        to: '/products?category=women clothing',
        shape: 'rounded-full',
    },
    {
        label: 'Jewelry',
        image: jewellery,
        to: '/products?category=jewellery',
        shape: 'rounded-xl',
    },
    {
        label: "Men's clothing",
        image: men,
        to: '/products?category=men clothing',
        shape: 'rounded-xl',
    },
    {
        label: 'Electronics',
        image: electronics,
        to: '/products?category=electronics',
        shape: 'rounded-full',
    },
]


export const Categories = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4">
            <div className="text-center">
                <h6 className="text-h6 text-ligth-pink">Explore us</h6>
                <h4 className="text-h4">Categories</h4>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6 p-6">
                {categories.slice(0, 2).map(({ label, image, to, shape }) => (
                    <CategoryItemBtn key={label} to={to} label={label} image={image} shape={shape} />
                ))}

                <NavLink
                    to="/categories"
                    className="w-40 h-40 flex items-center justify-center border border-ligth-blue rounded-full text-sm font-medium shadow hover:shadow-blue transition-all"
                >
                    <span className="text-center leading-tight text-bodyRegular">
                        <div className="text-xl">↗</div>
                        Explore all
                    </span>
                </NavLink>

                {categories.slice(2).map(({ label, image, to, shape }) => (
                    <CategoryItemBtn key={label} to={to} label={label} image={image} shape={shape} />
                ))}
            </div>
        </section>
    )
}
