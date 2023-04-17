import React from 'react'
import { immages } from '../../../constantes'

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={immages.spoon} alt='spoon' className='spoon__img'/>
</div>
  )
}

export default SubHeading

