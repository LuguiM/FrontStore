const Chip = ({ text, color }) => {

    return (<>
        <span
            className="rounded-3xl py-2 px-4 text-xs text-colorWhite w-48 w-max-40"
            style={{ backgroundColor: color }}
        >
            {text}
        </span>
    </>);
}

export default Chip;