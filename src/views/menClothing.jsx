import HeaderCategory from "./components/header";
import FooterCategory from "./components/footer";
import ProductsContent from "./components/products";
import productsServices from "../services/productsServices";
import { useEffect, useState } from "react";
import mensFooterSvg from '../assets/svgs/Category/mensFooter.svg'
import mensHeaderImg from '../assets/img/categories/mensHeaderImg.png'

const MenClothing = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const resp = await productsServices.getByCategorie(`men's clothing`)
        setData(resp)
    }

    useEffect(() => {
        getData()
    },[])

    return ( 
    <div className="text-color1">
        <HeaderCategory img={mensHeaderImg} category={`Men's clothing`}  />
        <ProductsContent data={data} setData={setData} ListData={getData}  />
        <FooterCategory styleClass={'mensBg'} svgName={mensFooterSvg} />
    </div>
    );
}
 
export default MenClothing;