import React from 'react'
//importamos el componente del navbar
import NavBar from '../../components/Public/NavBar/NavBar';
//importamos loscontenedores que llevara la pagina 
import Header from '../../contenedores/Public/Header/Header.jsx';
import AboutUs from '../../contenedores/Public/AboutUs/AboutUs';
import Chef from '../../contenedores/Public/Chef/Chef';
import Intro from '../../contenedores/Public/Intro/Intro';
import Laurels from '../../contenedores/Public/Laurels/Laurels';
import Footer from '../../contenedores/Public/Footer/Footer';
export default function HomePublic() {
  return (
    <div>      
      <NavBar/>
      <Header/>
      <AboutUs/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Footer/>
      </div>
  )
}
