import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart from '../Assests/cart.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu, setMenu] = useState("Shop");

  return (
    <>
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'><img src={logo} alt='' style={{height:40, width:60}}/></Link>
        <Link to='/' style={{textDecoration:"none"}}><h3>Mayuras'</h3></Link>
      </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none', color: '#8ab815'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Men")}}><Link  style={{textDecoration: 'none', color: '#8ab815'}}to='/Men'>Men</Link>{menu==="Men"?<hr/>:<></>} </li>
      <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none', color: '#8ab815'}} to='/Women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Kids")}}><Link  style={{textDecoration: 'none', color: '#8ab815'}} to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
      <Link to='/LoginSignup'><button> Login</button></Link>
      <Link to='/Cart'><img src={cart} alt=''style={{height:50, width:50}}/></Link>
      <div className='nav-cart-count'>1</div>
      </div>
    </div>
    </>
  )
}

export default Navbar
