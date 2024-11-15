import { Config } from "./configApis"

const allProducts = async (params) => {
    return await Config('GET','/products')
}

const getProduct = async (id) => {
    return await Config('GET', `/products/${id}`)
}

const allCategories = async (params) => {
    return  await Config('GET','/products/categories')
}

const getByCategorie = async (categorie) => {
    return await Config('GET',`/products/category/${categorie}`)
}


export default {
    allProducts,
    getProduct,
    allCategories,
    getByCategorie
}