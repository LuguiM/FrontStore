

export const Input = ({ value, onChange, placeholder, type, id = '', name = '', className }) => {
    return (
        <div className={'bg-white flex items-center gap-x-1  rounded-md px-5 py-3 border border-ligth-blue  shadow-sm ' + className}>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className='outline-none w-full' />
        </div>
    )
}
