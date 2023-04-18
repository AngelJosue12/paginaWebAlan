import React from 'react'
import './Footer.css';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import { immages } from '../../../constantes';
export default function Footer() {
  return (
    <div className='app__footer section__padding'>
 
    <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
            <h1 className="app__footer-headtext">Contactos</h1>
            <p className="p__opensans">Valle del Encinal, Huejutla de Reyes, Hidalgo, Mexico</p>
            <p className="p__opensans">nabinafam@gmail.com</p>
            <p className="p__opensans">+1 409-9853-002</p>          
  
        </div>
  
        <div className='app__footer-links_logo'>
            <img src={immages.Nab} alt='footer_logo'/>
            <p className="p__opensans">ALAN MARTINEZ HERNANDEZ </p>
            <p className="p__opensans">Yt : WasakaBegeinTv </p>
              <img src={immages.spoon} alt="spoon" className='spoon__img' style={{ marginTop:15 }}/>
  
                  <div className='app__footer-links_icons'>
                      <FiFacebook/>
                      <FiInstagram/>
                      <FiTwitter/>
                  </div>
        </div>
  
        
  
        
    </div>
    <div className='footer__copyright'>
            <p className='p__opensans'>2023 || Nabina Fam || Marca Registrada</p>
        </div>
    </div>
  
  )
}
