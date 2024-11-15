import Dialog from "../../../components/DialogComponent"
import { useEffect, useState } from 'react';
import productsServices from "../../../services/productsServices";
import Button from "../../../components/ButtonComponent";
import Image from "../../../components/ImageComponent";
import Chip from "../../../components/ChipComponent";
import RatingStars from "../../../components/RatingStars";


const ContentPart = ({ title, children }) => {
    return (
        <>
            <div className="border border-color4 shadow-xl rounded-2xl px-8 py-5 flex flex-col gap-y-3 items-start text-start">

                <h1 className="text-color3 text-xl">{title}</h1>

                {children}
            </div>
        </>
    )
}

const Modal = ({ idProp }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [productData, setProductData] = useState({});
    const [rating, setRating] = useState(0)

    const openModal = async (id) => {
        const resp = await productsServices.getProduct(id)
        setProductData(resp)
        setRating(resp.rating)
        setModalOpen(true)
    }

    let colorChip = ""

    switch (productData.category) {
        case "electronics":
            colorChip = "#6E55FF"
            break;
        case "jewelery":
            colorChip = "#999999"
            break;
        case "men's clothing":
            colorChip = "#558BFF"
            break;
        case "women's clothing":
            colorChip = "#F155FF"
            break;
        default:
            break;
    }




    return (
        <>
            <Button click={() => openModal(idProp)}
                style={"bg-color3 hover:bg-color4 text-colorWhite cursor-pointer hover:shadow-lg mx-auto  rounded-lg border-none py-2 px-2 text-sm"}
                text='+ Info' />

            <Dialog title='Detalles' isOpen={isModalOpen} onClose={() => setModalOpen(false)} styleClass={'w-[40rem]'} contentHeight={'85vh'} >
                <div className="px-12 flex flex-col  gap-y-10">
                    <div className="flex items-center gap-x-8">
                        <Image styleClass={'object-contain w-[229px] h-[10rem]'} url={productData.image} alt={productData.title} />
                        <div className="flex flex-col gap-y-7">
                            <h3 className="text-justify">{productData.title}</h3>
                            <Chip text={productData.category} color={colorChip} />
                        </div>
                    </div>

                    <ContentPart title="Descripción">
                        <p className="text-justify">{productData.description}</p>
                    </ContentPart>

                    <ContentPart title="Raiting">

                        <div className="flex flex-col mx-auto">
                            <div className="flex gap-x-5 items-center">
                                <h1><span className="text-xl">{rating.rate}</span> / 5</h1>

                                <div className="flex gap-x-2 ">
                                    <RatingStars rate={rating.rate} />
                                </div>
                            </div>
                            <p className="text-xs">{rating.count} calificaciones</p>

                        </div>
                    </ContentPart>

                </div>
                <div className="px-4 pt-4 flex justify-center">
                    <Button click={() => setModalOpen(false)} style='px-4 py-2 bg-colorWhite text-color2 hover:bg-slate-50' text='Cerrar' />
                </div>
            </Dialog>
        </>
    )
}

export default Modal