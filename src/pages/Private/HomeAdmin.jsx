import React from 'react'
import NavBarAdmin from '../../components/Private/NavBarAdmin/NavBarAdmin'
import HeaderAdmin from '../../contenedores/Private/Header/HeaderAdmin'
import Footer from '../../contenedores/Public/Footer/Footer';
export default function HomeAdmin() {
    return(
      <div>
        <NavBarAdmin/>
        <HeaderAdmin/>
        <Footer/>
      </div>
    )
}
