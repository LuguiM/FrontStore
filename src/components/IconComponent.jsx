const Icon = ({ name, styleClass, filled = false }) => {
    return (<>
        <span className={`material-symbols-outlined ${styleClass} ${filled ? 'filled' : ''}`}>
            {name}
        </span>
    </>);
}

export default Icon;