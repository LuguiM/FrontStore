import { Button } from "./Button"

export const CardCategory = ({title, description, img, reverse}) => {
    return (
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-5 justify-between`}>
            <div className="flex flex-col my-auto gap-5 w-full" >
                <span className="border-b border-gray ">
                    <h4 className="text-h4">{title}</h4>
                    <p className="text-bodyLarge ">{description}</p>
                </span>

                <Button label="Explore" isLink={`/products?name=${title}`} />
            </div>
            <span className={`flex justify-center ${reverse ? "md:justify-start items-start" : "md:justify-end items-end"}  w-full`}>
                <img src={img} alt={title} className="w-sm" />
            </span>
        </div>
    )
}
