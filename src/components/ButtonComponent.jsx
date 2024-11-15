const Button = ({ click, style, text }) => {
    return (
        <>
            <button 
            onClick={click} 
            className={'py-3 px-6 border border-color2 rounded-3xl  shadow-md hover:shadow-xl ' + style} >
                {text}
            </button>
        </>
    )
}

export default Button