import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
        <header className="my-10 mx-14 flex flex-wrap gap-x-2 justify-between">
            <h1 className="md:text-4xl  drop-shadow-lg" >
                <NavLink to={'/'}>FS</NavLink>
                </h1>

            <div className="flex gap-x-10 text-xs md:text-xl">
                <p> <a href="/#categorias">Categorias</a> </p>
                <p> <a href="#productos">Productos</a> </p>
            </div>
        </header>

        </>
    )
}

export default Navbar