import HeaderCategory from "./components/header";
import FooterCategory from "./components/footer";
import ProductsContent from "./components/products";
import productsServices from "../services/productsServices";
import { useEffect, useState } from "react";
import jeweleryFooterSvg from '../assets/svgs/Category/jeweleryFooter.svg'
import jeweleryHeaderImg from '../assets/img/categories/jeweleryHeaderImg.png'

const Jewelery = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const resp = await productsServices.getByCategorie(`jewelery`)
        setData(resp)
    }

    useEffect(() => {
        getData()
    },[])

    return ( 
    <div className="text-color1">
        <HeaderCategory img={jeweleryHeaderImg} category={`Jewelery`}  />
        <ProductsContent data={data} setData={setData} ListData={getData}  />
        <FooterCategory styleClass={'jeweleryBg'} svgName={jeweleryFooterSvg} />
    </div>
    );
}
 
export default Jewelery;