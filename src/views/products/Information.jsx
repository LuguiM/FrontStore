import {Button} from '../../components'
import productImage1 from "../../assets/infoImg/product-info-1.png"
import productImage2 from "../../assets/infoImg/product-info-2.png"
import productImage3 from "../../assets/infoImg/product-info-3.png"

export const Information = () => {
    return (
        <section className='flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row justify-center md:justify-between'>
                <h2 className='text-h4 text-center md:text-left md:w-1/2'>Bring out your true value with our products</h2>

                <div className='flex flex-col gap-4 justify-center items-center md:items-end'>
                    <p className='text-bodySmall text-center sm:text-end'>
                        Find the style you like the most through our different <br /> categories suitable for different types of people
                    </p>
                    <Button isLink label="Shop now"  />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-4">
                <img src={productImage1} alt="" loading='lazy' className='w-[280px]' />
                <img src={productImage2} alt="" loading='lazy' className='w-[280px]' />
                <img src={productImage3} alt=" " loading='lazy' className='w-[280px]' />
            </div>
        </section>
    )
}
