import jewellery from '../assets/img/jewellery.jpg'
import womanClothes from '../assets/img/woman_clothing.png'
import menClothes from '../assets/img/men_clothing.png';
import accesories from '../assets/img/accesories.jpg'

const categories = [
    { key: "Jewellery", img: jewellery, color: "pinkCircle" },
    { key: "WomanClothes", img: womanClothes, color: "pinkCircle" },
    { key: "MenClothes", img: menClothes, color: "blueCircle" },
    { key: "Accesories", img: accesories, color: "blueCircle" },
]

export const Circle = ({ categorie = "Jewellery", className }) => {

    const circleSelected = categories.find(c => c.key === categorie);

    return (
        <img src={circleSelected.img} alt={circleSelected.key} className={`circle-base ${circleSelected.color} ${className}`} />
    )
}
