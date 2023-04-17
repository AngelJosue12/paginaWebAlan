import React from 'react'
import './Laurels.css';
import SubHeading from '../../../components/Public/SubHeading/SubHeading';

import { immages,data } from '../../../constantes';

const AwardCard = ({award:{imgUrl,title,subtitle}})=>(
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award'/>
    <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{color:'#dcca87'}}>
          {title}
        </p>

        <p className='p__cormorant'>
          {subtitle}
        </p>

    </div>
  </div>
);

export default function Laurels() {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
          <SubHeading title="Tipos"/>
          <h1 className='headtext__cormorant'>Shampoo`s</h1>

          <div className='app__laurels_awards'>
              {data.awards.map((award)=><AwardCard award={award} key={award.title}/>)}
          </div>
      </div>

      <div className='app__wrapper_img'>
              <img src={immages.xxx} alt="laurels" />
      </div>
  </div>
  )
}
