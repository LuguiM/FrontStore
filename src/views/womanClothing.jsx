import HeaderCategory from "./components/header";
import FooterCategory from "./components/footer";
import ProductsContent from "./components/products";
import productsServices from "../services/productsServices";
import { useEffect, useState } from "react";
import womanFooterSvg from '../assets/svgs/Category/WomanFooter.svg'
import womanHeaderImg from '../assets/img/categories/womanHeaderImg.png'

const MenClothing = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const resp = await productsServices.getByCategorie(`women's clothing`)
        setData(resp)
    }

    useEffect(() => {
        getData()
    },[])

    return ( 
    <div className="text-color1">
        <HeaderCategory img={womanHeaderImg} category={`Women's clothing`}  />
        <ProductsContent data={data} setData={setData} ListData={getData}  />
        <FooterCategory styleClass={'womanBg'} svgName={womanFooterSvg} />
    </div>
    );
}
 
export default MenClothing;