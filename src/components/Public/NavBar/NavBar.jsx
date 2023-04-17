import React from 'react';
import './NavBar.css';

import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
//
import { NavLink ,Link} from 'react-router-dom';

import { immages } from '../../../constantes';


export default function NavBar() { 
    const [toggleMenu,setToggleMenu] = useState(false);

    return (
      <nav className='app__navbar'>
          <div className='app__navbar-logo'>
              <img src={immages.Nab} alt='app logo'/>
          </div>
          <ul className='app__navbar-links'>
          <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><Link as={NavLink} to="/" >Home</Link></li>
          <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><a as={NavLink} href="/#about" >About</a></li>
          <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><a as={NavLink} href="/#menu" >Inf</a></li>
          <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><a as={NavLink} href="/#awards" >Award</a></li>          
          </ul>
    
    
          <div className='app__navbar-login'>
               <div/>
                 <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><Link as={NavLink} to="/Login" >Login</Link></li>
                <div/>
          </div>
    
          <div className='app__navbar-smallscreen'>
              <GiHamburgerMenu color='#fff'  fontSize={27} onClick={()=>setToggleMenu(true)}/>
             
              {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
                            
                              <ul className='app__navbar-smallscreen-links'>
                                    <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><Link as={NavLink} to="/" >Home</Link></li>
                                    <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><a as={NavLink} href="/#about" >About</a></li>
                                    <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><a as={NavLink} href="/#menu" >Inf</a></li>
                                    <li className='p__opensans' style={{textDecoration:'none', listStyle:'none'}}><a as={NavLink} href="/#awards" >Award</a></li>    
                                </ul>
                          
                    </div>
               )} 
    
          </div>
      </nav>
    )
};
