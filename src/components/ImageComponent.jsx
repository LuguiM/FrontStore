const Image = ({ url, alt, styleClass, animation }) => {

    if (!url) {
        return (
            <>
                <img {...animation} className="border border-color1" src="https://placehold.jp/ffffff/0D3A5F/150x150.png?text=FrontStore" alt="FrontStore" />
            </>
        )
    }

    return (
        <>
            <img {...animation} className={styleClass} src={url} alt={alt} />
        </>
    )
}

export default Image