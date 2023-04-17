import React from 'react'
import './Header.css';
import { immages } from '../../../constantes';
import SubHeading from '../../../components/Public/SubHeading/SubHeading';
export default function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
        <SubHeading title="Bienvenido a:"/>
        <h1 className='app__header-h1'>nabina-fam</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>El mundo de la belleza, empieza en tu higiene</p>
    </div>
    <div className='app__wrapper_img'>
          <img src={immages.jisoo} alt="header img" />
    </div>
  </div> 
  )
}