import Navbar from '../landing/nav'
import HeaderApp from '../landing/header'
import Categoria from '../landing/categorias'
import Productos from '../landing/products'
import FooterApp from '../landing/footer'

import { Outlet } from 'react-router-dom'

const Root = () => {
    return (<div className="text-color1">
        <Navbar />
            <div id='mainContent'>
                <Outlet />
            </div>
        <FooterApp />
    </div>);
}

export default Root;