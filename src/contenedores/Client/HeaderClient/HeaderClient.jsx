import React from 'react'
import SubHeading from '../../../components/Public/SubHeading/SubHeading'
import './HeaderClient.css'
import { immages } from '../../../constantes'
export default function HeaderClient() {

  return (
    <div>
     <div className='app__header app__wrapper section__padding' id='home'>
     
    <div className='app__wrapper_info'>
        <SubHeading title="Bienvenido a:"/>
        <h1 className='app__header-h1'>Nabina Fam</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>El mundo de la belleza, empieza en tu higiene</p>
    </div>

    <div className='app__wrapper_img'>
          <img src={(immages.amor)} alt="header img" />
    </div>
  </div> 
    </div>
  )
}

