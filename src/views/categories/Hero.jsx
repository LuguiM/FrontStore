import { Circle } from "../../components"

const categories = [
    { name: "Jewellery", position: "items-end justify-end" },
    { name: "WomanClothes", position: "items-start justify-start" },
    { name: "MenClothes", position: "items-end justify-end" },
    { name: "Accesories", position: "items-start justify-start" }
]

export const Hero = () => {
  return (
    <section className="flex justify-between ">
        <div className="my-auto w-max">
            <h1 className="text-h2">Categories</h1>
            <h2 className="text-bodyLarge  text-ligth-purple">Fashion according to your preference</h2>
        </div>
        <div className="hidden lg:grid grid-cols-4  h-64 w-fit">
            {
                categories.map(c => (
                    <div key={c.name} className={` flex ${c.position}`} >
                        <Circle categorie={c.name} className="!w-[9rem] !h-[9rem] !object-cover" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
