import { Button } from "../../components"
import  ShippingWoman  from "../../assets/img/woman-ship.png"

export const Shipping = () => {
    return (
        <section className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-y-4">
                <h6 className="text-h6 text-ligth-pink">Send</h6>
                <h4 className="text-h4">Don't run out of your favorite products</h4>
                <p className="text-bodyLarge text-gray-500 lg:mr-36">
                    FrontStore has nationwide shipping so you can get everything you want from wherever you are.
                </p>
                <Button label="Shop now" isLink className={"w-fit"} />
            </div>

            <img src={ShippingWoman} alt="shipping woman" className="w-full h-full object-fill"  />
        </section>
    )
}
