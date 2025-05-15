import woman from "../../assets/img/woman-products.png"
import men from "../../assets/img/man-products.png"

export const Hero = () => {
    return (
        <section className="border border-pink rounded-md flex p-5 md:p-0 shadow-lg">
            <img src={woman} alt="banner_woman" className="hidden lg:block w-[321px] h-[393px] -mt-14 -ml-1" />
            <div className="text-center my-auto">
                <h1 className="text-pink text-h3">FrontStore</h1>
                <h2 className="text-h4">Quality Products</h2>

                <p className="text-ligth-purple text-Paragraph">
                    Find your favorite products from our different brands and create a trend-setting style
                </p>
            </div>
            <img src={men} alt="banner_woman" className="hidden md:block w-[295px] h-[385px] -mt-11" />

        </section>
    )
}
