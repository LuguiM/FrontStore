import Image from "../../components/ImageComponent";

const FooterCategory = ({ styleClass, svgName }) => {
    return (<>
        <Image url={svgName} styleClass={'w-full'} />
        <footer className={`p-14 ${styleClass}`}>
            <h1 className="text-xl md:text-4xl drop-shadow-lg">FrontStore</h1>
        </footer>

    </>);
}

export default FooterCategory;