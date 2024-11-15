import ProductCard from "../../landing/products/components/ProductCard";
import Pagination from "../../components/PaginationComponent";
import Button from "../../components/ButtonComponent";
import Input from "../../components/InputComponent";
import { useState } from "react";

const ProductsContent = ({ data, setData, ListData }) => {

    const [searchProduct, setSearchProduct] = useState('');
    const totalProducts = data.length;
    const [productPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * productPerPage // = 1 * 6 = 6
    const firstIndex = lastIndex - productPerPage // = 6 - 6 = 0

    const search = () => {
        let result = data;

        if (searchProduct) {
            result = result.filter(products => products.title.toLowerCase().includes(searchProduct.toLowerCase()))
        }

        setCurrentPage(1)
        setProducts(result)

    }

    const cleanSearch = () => {
        setData('')
        ListData()
    }
    return (<>
        <div className="md:px-10 my-14 flex flex-col items-center gap-y-10 text-center">
            <div>
                <h1 className="text-3xl md:text-4xl drop-shadow-xl">PRODUCTOS</h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 my-10'>
                <Input icon={'search'} placeholder={'Buscar producto'} type={'search'}
                    styleClass='md:w-[46rem]' value={searchProduct} onChange={setSearchProduct}
                />
                <div className="flex gap-3 justify-center">
                    <Button click={search} style={'bg-color2 text-colorWhite'} text='Buscar' />
                    <Button click={cleanSearch} style={'bg-colorWhite text-color2'} text='Limpiar' />
                </div>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mx-14">
                {data.length > 0 ? (
                    data.map(product => (
                        <ProductCard key={product.id} data={product} styleClass={'border border-color1'} />
                    ))
                ).slice(firstIndex, lastIndex) : (
                    <h1 className='text-color1 '>No se encontro ningun producto</h1>

                )}
            </div>
            <Pagination perPage={productPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} total={totalProducts} />
        </div>

    </>);
}

export default ProductsContent;