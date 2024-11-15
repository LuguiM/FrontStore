import Image from "../../components/ImageComponent";
import Navbar from "../../landing/nav";

const HeaderCategory = ({ img, category }) => {
    return (<>

       <Navbar /> 

        <div className="relative h-[30vh] lg:h-[85vh]">

            <p className="absolute z-10 top-[5rem] md:top-[10rem] start-5 lg:top-[18rem] lg:start-[9rem] text-2xl md:text-5xl lg:text-6xl drop-shadow-lg w-10">{category}</p>

            <Image styleClass={'absolute lg:h-full lg:w-full'} url={img} alt={category} />
        </div>

    </>);
}

export default HeaderCategory;