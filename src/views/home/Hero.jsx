import { Button, Circle } from "../../components"

const categories = [
    { name: "Jewellery", position: "items-end justify-end" },
    { name: "WomanClothes", position: "items-start justify-start" },
    { name: "MenClothes", position: "items-start justify-start" },
    { name: "Accesories", position: "items-end justify-start" }
]

export const Hero = () => {
    return (
        <section className='flex flex-col items-center gap-y-6'>
            <div className='text-center mx-15 xl:mx-25'>
                <p className='text-h6 !font-bold text-ligth-pink'>Meet the Store</p>
                <h1>
                    <span className='text-h5 md:text-h2 tracking-tight'>Know your true style with</span>
                    <br className="sm:hidden" />
                    <span className='ml-2 text-h4 md:text-h1 text-pink'>FrontStore</span>
                </h1>

            </div>
                <Button label="Shop now" isLink />
            <div className="hidden lg:grid grid-cols-4 gap-x-16 h-64">
                {
                    categories.map(c => (
                        <div key={c.name} className={`px-4 flex ${c.position}`}>
                            <Circle categorie={c.name} />
                        </div>
                    ))
                }
            </div>


        </section>
    )
}
