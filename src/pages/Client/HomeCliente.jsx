import React from 'react'
import NavBarClient from '../../components/Client/NavBarClient/NavBarClient';
import HeaderClient from '../../contenedores/Client/HeaderClient/HeaderClient';
import AboutUs from '../../contenedores/Public/AboutUs/AboutUs';
import VerProductos from '../../contenedores/Client/VerProductos/VerProductos';
import Chef from '../../contenedores/Public/Chef/Chef';
import Intro from '../../contenedores/Public/Intro/Intro';
import Laurels from '../../contenedores/Public/Laurels/Laurels';
import GalleryClient from '../../contenedores/Client/GalleryClient/GalleryClient';
import Footer from '../../contenedores/Public/Footer/Footer';
export default function HomeCliente() {
  return (
    <div>
        <NavBarClient/>
        <HeaderClient/>
        <AboutUs/>
        <VerProductos/>
        <Chef/>
        <Intro/>
        <Laurels/>
        <GalleryClient/>
        <Footer/>
    </div>
  )
}
