import React from 'react'
import './AboutUs.css';
import { immages } from '../../../constantes';
export default function AboutUs() {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
        <img src={immages.NF1} alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
     
        <div className='app__aboutus-content_about'>
            <h1 className='headtext__cormorant'>Mision</h1>
            <img src={immages.spoon} alt='about_spoon' className='spoon__img'/>
            <p className='p__opensans'>Satisfacer las necesidades de los consumidores elaborando el shampoo con excelente calidad, que les ayude a mantener un cabello saludable para generar bienestar utilizando un producto sustentable a base de ingredientes naturales.</p>
            <button type='button' className='custom__button'>Ver mas</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
              <img src={immages.knife} alt='about_knife'/>
        </div>

        <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Vision</h1>
            <img src={immages.spoon} alt='about_spoon' className='spoon__img'/>
            <p className='p__opensans'>posicionarse en el mercado del área de higiene personal, mediante el uso de ingredientes naturales y aprovechando al máximo la tecnología para ser identificados como símbolo de excelencia. </p>
            <button type='button' className='custom__button'>Ver mas</button>
        </div>

    </div>
</div>
  )
}
