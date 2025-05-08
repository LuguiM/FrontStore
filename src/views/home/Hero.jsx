import { Button, Circle } from "../../components"

const categories = [
    { name: "Jewellery", position: "end" },
    { name: "WomanClothes", position: "start" },
    { name: "MenClothes", position: "start" },
    { name: "Accesories", position: "end" }
]

export const Hero = () => {
    return (
        <section className='flex flex-col items-center gap-y-6'>
            <div className='text-center mx-15 xl:mx-25'>
                <p className='text-h6 !font-bold'>Meet the Store</p>
                <h1>
                    <span className='text-h2 tracking-tight'>Know your true style with</span>
                    <span className='ml-2 text-h1 text-pink'>FrontStore</span>
                </h1>

            </div>
                <Button label="Shop now" isLink />
            <div class="grid grid-cols-4 gap-x-16 h-64">
                {
                    categories.map(c => (
                        <div class={`px-4 flex items-${c.position} justify-${c.position}`}>
                            <Circle categorie={c.name} />
                        </div>
                    ))
                }
            </div>


        </section>
    )
}
