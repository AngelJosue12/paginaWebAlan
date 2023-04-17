import React from 'react'
import './Chef.css';
import { immages } from '../../../constantes';
import SubHeading from '../../../components/Public/SubHeading/SubHeading';

export default function Chef() {
  return (
    <div className='app__bg app__wrapper section__padding' id='menu'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={immages.momo} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
        <SubHeading title=""/>
        <h1 className='headtext__cormorant'>Momo Kim</h1>

        <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
                <img src={immages.quote} alt='quote'/>
                  <p className='p__opensans'>Momo:</p>

            </div>

            <p className='p__opensans'>La belleza es el cuidado y delicado del petalo de una mujer</p>

        </div>

        <div className='app__chef-sign'>
                <p>Twice</p>  
        </div>
    </div>
</div>
  )
}
