import woman from "../../assets/categories/woman.png"
import men from "../../assets/categories/men.png"
import jewellery from "../../assets/categories/jewellery.png"
import electronics from "../../assets/categories/electronics.png"

import { CardCategory } from "../../components"

const categories = [
  { title: "Women's clothing", description: "Varities of styles made for women with style and elegance", img: woman, reverse: false },
  { title: "Men's clothing", description: "Hundreds of styles for the man who seeks elegance", img: men, reverse: true },
  { title: "Jewellery", description: "Made of the highest quality and with materials of very good resistance", img: jewellery, reverse: false },
  { title: "Electronics", description: "Electronics devices for those passsionate about technology", img: electronics, reverse: true },
]

export const CategoryItems = () => {
  return (
    <>
      {
        categories.map((c, i) => (
          <CardCategory 
            key={c.i}
            title={c.title}
            description={c.description}
            img={c.img}
            reverse={c.reverse}
          />
        ))
      }
    </>
  )
}
