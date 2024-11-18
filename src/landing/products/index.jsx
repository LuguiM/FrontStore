import { useEffect, useState } from 'react';
import tillSvg from '../../assets/svgs/tilt.svg';
import coupleimg from '../../assets/img/couple2.png';
import eviosAll from '../../assets/img/envioAll.png';
import producs from '../../services/productsServices';

import ProductCard from './components/ProductCard';
import Button from '../../components/ButtonComponent';
import Image from '../../components/ImageComponent';
import Input from '../../components/InputComponent';
import Pagination from '../../components/PaginationComponent';

const Productos = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategoryVal] = useState('');
    const [searchProduct, setSearchProduct] = useState('');

    const totalProducts = products.length;
    const [productPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * productPerPage // = 1 * 6 = 6
    const firstIndex = lastIndex - productPerPage // = 6 - 6 = 0

    const ListProducts = async () => {

        try {
            const res = await producs.allProducts()
            setProducts(res);
        } catch (e) {
            console.log(e);
            setProducts([])
        }
    }

    const listCategories = async () => {

        try {
            const resp = await producs.allCategories()

            setCategories(resp)
        } catch (e) {
            console.log(e);
        }
    }

    const search = () => {
        let result = products;

        if (category) {
            result = products.filter(product => product.category === category)
        }

        if (searchProduct) {
            result = result.filter(products => products.title.toLowerCase().includes(searchProduct.toLowerCase()))
        }

        setCurrentPage(1)
        setProducts(result)

    }

    const cleanSearch = () => {
        setCategoryVal('')
        setProducts('')
        ListProducts()
    }

    useEffect(() => {
        ListProducts()
        listCategories()
    }, [])

    return (
        <>
            <div id='productos' className="products-bg p-10 flex flex-col items-center gap-y-10 text-center" >
                <div data-aos="zoom-in-down">
                    <h1 className="text-2xl md:text-4xl drop-shadow-xl">PRODUCTOS</h1>
                    <p className="md:text-xl mt-5 text-color2">Variedad de estilos y accesorios que te encataran</p>
                </div>

                <div data-aos="zoom-in-down" className='flex flex-col xl:flex-row gap-5 my-10'>
                    <Input icon={'search'} placeholder={'Buscar producto'} type={'search'}
                        styleClass='md:w-[46rem]' value={searchProduct} onChange={setSearchProduct}
                    />

                    <select name="" id="" value={category} onChange={(e) => setCategoryVal(e.target.value)} className='rounded-3xl px-5 py-3 outline-none border border-color1 shadow-xl'>
                        <option disabled selected value="">Categorias</option>
                        {categories.map((categorie, index) => <option key={index} defaultValue={categorie} >{categorie}</option>)}
                    </select>
                    <div className='flex gap-x-3'>
                        <Button click={search} style={'bg-color2 text-colorWhite'} text='Buscar' />
                        <Button click={cleanSearch} style={'bg-colorWhite text-color2'} text='Limpiar' />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:mx-14" >
                    {/* <Modal ></Modal> */}
                    {products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} data={product} />
                        ))
                    ).slice(firstIndex, lastIndex) : (
                        <h1 className='text-color1 '>No se encontro ningun producto</h1>

                    )}
                </div>
                <Pagination perPage={productPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} total={totalProducts} />
            </div>
            <Image styleClass={'bg-color6 w-full '} url={tillSvg} alt='Till' />
            <div className='bg-color6 px-10 flex flex-col-reverse md:flex-row '>
                <Image animation={{
                'data-aos':"zoom-in"
            }}  styleClass={' hidden lg:block drop-shadow-2xl mx-auto w-[34rem] xl:w-[40rem]'} url={coupleimg} alt={'couple'} />
                <div data-aos="zoom-in" className='flex flex-col items-center justify-center gap-10 text-center pt-14'>
                    <h1 className='text-3xl drop-shadow-2xl'>No te quedes sin tus artículos favoritos</h1>
                    <p className='text-color2 text-xl'>FrontSotre cuenta con envio a nivel nacional</p>
                    <Image styleClass={'h-[15rem]'} url={eviosAll} alt={'envios'} />
                </div>
            </div>
        </>
    )
}

export default Productos
