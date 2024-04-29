import React from 'react'
import './Offers.css'
import exclusive from '../Assests/exclusive.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on Best Seller Products</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive} alt=""/>
      </div>
    </div>
  )
}

export default Offers
