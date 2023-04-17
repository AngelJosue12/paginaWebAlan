import React from 'react'
import { immages } from '../../../constantes';
import SubHeading from '../../../components/Public/SubHeading/SubHeading';
export default function HeaderAdmin() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
        <SubHeading title="Bienvenido al lado:"/>
        <h1 className='app__header-h1'>Adminstrador</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>Donde vos teneis el poder</p>
    </div>

    <div className='app__wrapper_img'>
          <img src={immages.luna} alt="header img" />
    </div>
  </div> 
  )
}
