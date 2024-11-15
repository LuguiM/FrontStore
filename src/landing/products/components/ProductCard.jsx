import Modal from "./Modal"

const ProductCard = ({ data, styleClass }) => {
    return (
        <div  className={`flex flex-col items-center gap-y-10 shadow-xl p-10 rounded-3xl bg-colorWhite ${styleClass}`}>
            <img className='object-contain w-[229px] h-[112px]' src={data.image} alt={data.title} />
            <h1 className='h-full'>{data.title}</h1>

            <p className='text-xl'>$ {data.price}</p>

            <Modal idProp={data.id}></Modal>
        </div>
    )
}

export default ProductCard