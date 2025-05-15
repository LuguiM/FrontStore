import { useState } from "react";
import { ProductModal } from "./ProductModal";

export const ProductCard = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="relative w-full max-w-xs border border-ligth-purple rounded-lg shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md overflow-hidden cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <span className="material-symbols-outlined cursor-pointer absolute top-3 right-3 p-2 rounded-full shadow text-white bg-ligth-blue hover:bg-blue border">
                    favorite
                </span>

                <img
                    src={product.image}
                    alt="Product"
                    className="w-full h-64 object-contain p-4"
                />

                <div className="px-4 pb-4">
                    <p className="text-sm font-semibold text-gray-800">{product.title}</p>
                    <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                    <p className="text-lg font-bold text-blue">${product.price}</p>
                </div>
            </div>

            {isModalOpen && (
                <ProductModal product={product} onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
};
