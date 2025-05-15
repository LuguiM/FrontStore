import network from "./network.services";

const allProducts = async () => {
    return await network('GET', '/products');
};

const getProduct = async (id) => {
    return await network('GET', `/products/${id}`);
};

const allCategories = async () => {
    return await network('GET', '/products/categories');
};

const getByCategory = async (category) => {
    return await network('GET', `/products/category/${category}`);
};

export default {
    allProducts,
    getProduct,
    allCategories,
    getByCategory
};
