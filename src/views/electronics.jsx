import HeaderCategory from "./components/header";
import FooterCategory from "./components/footer";
import ProductsContent from "./components/products";
import productsServices from "../services/productsServices";
import { useEffect, useState } from "react";
import electronicsFooterSvg from '../assets/svgs/Category/electronicsFooter.svg'
import electronicsHeaderImg from '../assets/img/categories/electronicsHeaderImg.png'

const Electronics = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const resp = await productsServices.getByCategorie(`electronics`)
        setData(resp)
    }

    useEffect(() => {
        getData()
    },[])

    return ( 
    <div className="text-color1">
        <HeaderCategory img={electronicsHeaderImg} category={`Electronics`}  />
        <ProductsContent data={data} setData={setData} ListData={getData}  />
        <FooterCategory styleClass={'electronicsBg'} svgName={electronicsFooterSvg} />
    </div>
    );
}
 
export default Electronics;