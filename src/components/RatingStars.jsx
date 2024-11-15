import Icon from "./IconComponent";


const RatingStars = ({ rate }) => {

    const stars = [1, 2, 3, 4, 5];


    return (<>

        {
            stars.map(star => (
                <Icon
                    key={star}
                    name={'star'}
                    styleClass={'text-3xl text-amber-300'}
                    filled={star <= Math.round(rate)}
                />
            ))
        }

    </>);
}

export default RatingStars;