import electronicImg from '../assets/img/electronics.jpg'
import jeweleryImg from '../assets/img/jewelery.jpg'
import coupleImg from '../assets/img/coupleImg.png'
import menClothingImg from '../assets/img/men clothing.jpg'
import womanClothingImg from '../assets/img/womanClothes.jpg'
import svgWaves from '../assets/svgs/waves.svg'

import Image from '../components/ImageComponent'
import { NavLink, Navigate } from 'react-router-dom'


const CardCategoria = ({ image, title }) => {
    return (
        <div className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-310 duration-300 
            relative rounded-3xl overflow-hidden h-[10rem] md:w-[20rem] shadow-2xl hover:shadow-xl hover:shadow-color4  "
            data-aos="flip-left"  
            >

            <Image styleClass={'object-cover h-full w-full opacity-50'} url={image} alt={title} />

            <h1 className="absolute inset-0 flex items-center justify-center text-xl text-white hover:text-color1 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.8)]">
                {title}
            </h1>
        </div>
    )
}




const Categoria = () => {

    const categorys = [
        {
            name: 'Electronics',
            image: electronicImg
        },
        {
            name: 'Jewelery',
            image: jeweleryImg
        },
        {
            name: `Men's clothing`,
            image: menClothingImg
        },
        {
            name: `Women's clothing`,
            image: womanClothingImg
        }
    ]

    return (
        <>
            <div id='categorias' className="m-2 md:m-14 p-4 md:p-14 grid xl:grid-cols-2 gap-14">
                <Image animation={{
                    'data-aos':"zoom-in"
                }} 
                 url={coupleImg} alt={'coupleImg'} styleClass={' lg:w-[34rem] mx-auto'} />
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center" data-aos="fade-down">
                        <h1 className="text-3xl drop-shadow-xl" >CATEGORIAS</h1>
                        <p className="text-lg mt-3 text-color2">Productos de la mano con tus gustos</p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-10 mt-10'>
                        {
                            categorys.map(item => (
                                <NavLink key={item.name} to={`category/${item.name}`}>
                                    <CardCategoria  image={item.image} title={item.name} />
                                </NavLink>
                            ))
                        }
                    </div>

                </div>
            </div>
            <Image styleClass={'products-bg w-full'} url={svgWaves} alt={'Waves'} />
        </>
    )
}

export default Categoria