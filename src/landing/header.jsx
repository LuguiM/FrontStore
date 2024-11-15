import BookSvg from "../assets/svgs/bookSvg"
import headerGirl from '../assets/img/GirlHeader.png'
import mobileHeader from '../assets/img/mobileHeader.png';
import Image from "../components/ImageComponent"

const HeaderApp = () => {
    return (
        <>
            <div className="relative h-[90vh] md:h-[30rem] lg:h-[120vh] ">
                <div className="absolute z-10 start-[6.5rem] top-[5.5rem] lg:top-[16rem] lg:start-[3rem] flex flex-col justify-center items-center "
                data-aos="fade-right"
                >
                    <h1 className="text-3xl lg:text-5xl xl:text-7xl drop-shadow-lg ">FrontStore</h1>
                    <p className=" lg:text-3xl text-color2 drop-shadow-lg">Moda a un click</p>
                </div>

                <p data-aos="fade-down" className="hidden md:block lg:text-2xl absolute z-10 md:top-[24rem] md:start-[30rem] text-center lg:top-[50rem] lg:start-[39rem] xl:start-[65rem]">Moda y estilo en un solo lugar</p>
                {/* <img className="absolute h-full w-full" src={headerGirl} alt="header" /> */}
                <Image styleClass={' hidden md:block absolute lg:h-full w-full'} url={headerGirl} alt='Header' />
                <Image styleClass={' md:hidden absolute lg:h-full w-full'} url={mobileHeader} alt='Header' />


            </div>
        </>
    )
}


export default HeaderApp