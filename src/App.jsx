import { useState, useEffect } from 'react'
import Navbar from './landing/nav'
import HeaderApp from './landing/header'
import Categoria from './landing/categorias'
import Productos from './landing/products'
import FooterApp from './landing/footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
    })
  }, [])

  return (
    <div className="text-color1">
      <Navbar />
      <HeaderApp />
      <Categoria />
      <Productos />
      <FooterApp />
    </div>
  )
}

export default App
