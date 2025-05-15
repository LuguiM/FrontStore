export const ProductModal = ({ product, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-black/40  flex items-center justify-center p-4 transition-all"
            onClick={onClose}
        >
            <div
                className="bg-white inset-0 rounded-lg max-w-2xl w-full shadow-xl relative animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                    onClick={onClose}
                >
                    ✕
                </button>
                <div className="flex flex-col md:flex-row gap-6 p-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full md:w-1/2 h-64 object-contain"
                    />
                    <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-800 mb-1">
                            {product.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-blue">
                                ${product.price}
                            </span>
                            <span className="text-sm text-yellow-600">
                                ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
