import electronics from "../../assets/infoImg/electronics.png"
import jewellery from "../../assets/infoImg/jewellery.png"
import men from "../../assets/infoImg/men.png"
import woman from "../../assets/infoImg/woman.png"


export const Information = () => {
    return (
        <section className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
                <h6 className="text-h6 text-ligth-pink">Choose</h6>
                <h3 className="text-h4 lg:mr-40">Make your own style with our products</h3>
                <p className="text-bodyLarge text-gray-500 lg:mr-36">
                    Choose from our wide variety of products and brands, and be trendy with them.
                </p>
            </div>

            <div className="grid grid-cols-4 grid-rows-4 gap-4">

                <div className="row-span-2 col-start-1 row-start-3">
                    <img src={jewellery} className="w-full h-full object-cover rounded-xl" alt="jewellery" />
                </div>
                <div className="row-span-2 col-start-2 row-start-3">
                    <img src={electronics} className="w-full h-full object-cover rounded-xl" alt="electronics" />

                </div>
                <div className="row-span-2 col-start-2 row-start-1">
                    <img src={men} className="w-full h-full object-cover rounded-xl" alt="men Clothes" />
                </div>
                <div className="col-span-2 row-span-4 col-start-3 row-start-1">
                    <img src={woman} className="w-full h-full object-cover rounded-xl" alt="woman Clothes" /> 
                </div>
            </div>
        </section>
    )
}
