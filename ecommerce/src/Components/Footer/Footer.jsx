import React from 'react'
import './Footer.css'
import logo from '../Assests/logo.png'
import instagram from '../Assests/instagram.png'
import whatsapp from '../Assests/whatsapp.png'
import x from '../Assests/x.png'
import youtube from '../Assests/youtube.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
        <Link to='/'><img src={logo} alt="" style={{height:40, width:60}} /></Link>
        <Link to='/' style={{textDecoration:"none"}}><h3>Mayuras'</h3></Link>
        </div>
          <ul className='footer-links'>
                <li>Company</li>
                <li>About Us</li>
                <li>Products</li>
                <Link to='/Offers' style={{textDecoration:"none", color:"#8ab815"}}><li>Offers</li></Link>
                <li>Contact</li>
          </ul>
          <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={instagram} alt="" />
            </div>
            <div className='footer-icon-container'>
                <img src={whatsapp} alt="" />
            </div>
            <div className='footer-icon-container'>
                <img src={x} alt="" />
            </div>
            <div className='footer-icon-container'>
                <img src={youtube} alt="" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer
