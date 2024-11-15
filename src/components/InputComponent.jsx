const Input = ({icon, value, onChange, placeholder, type, id='', name = '', styleClass}) => {

    let iconContent = ""

    if(icon){
        iconContent = (
            <span className="material-symbols-outlined">
                {icon}
            </span>
        )
    }

    return (<>

        <div className={'bg-colorWhite flex items-center gap-x-1  rounded-3xl px-5 py-3 border border-color1  shadow-xl ' + styleClass}>
            {iconContent}
            <input 
            type={type} 
            name={name} 
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)} 
            placeholder={placeholder}
            className='outline-none w-full' />
        </div>

    </>);
}

export default Input;