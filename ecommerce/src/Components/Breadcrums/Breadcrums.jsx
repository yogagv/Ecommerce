import React from 'react'
import './Breadcrum.css'
import arrowr from '../Assests/arrowr.png'

const Breadcrums = (props) => {
    const {Product} = props;
  return (
    <div className='breadcrum'>
      HOME<img src={arrowr} alt="" /> SHOP <img src={arrowr} alt="" /> {Product.category} <img src={arrowr} alt="" /> {Product.name}
    </div>
  )
}

export default Breadcrums
