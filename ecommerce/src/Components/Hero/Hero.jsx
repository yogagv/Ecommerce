import React from 'react'
import './Hero.css'
import hand from '../Assests/hand.png'
import hero from '../Assests/hero.png'
import arrow from '../Assests/arrow.png'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand} alt='' style={{height:50, width:70}}/>
        </div>
        <p id='p1'>collections</p>
        <br />
        <p id='p2'>for everyone</p>
      </div>
      <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img src={arrow} alt='' style={{height:20, width:30}}/>
      </div>
      </div>
      <div className="Hero-right">
      <img src={hero} alt=''/>
      </div>
    </div>
  )
}

export default Hero
