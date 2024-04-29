import React from 'react'
import './CSS/Forgot.css'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className='forgot'>
    <div className='forgot-container'>
          <h1>Forgot Username</h1>
          <div className='forgot-fields'>
              <input type="text" placeholder='Enter your name' />
              <input type="email" placeholder='Email' />
          </div>
          <button>Submit</button>
          <p className="forgot-password">Forgot password? <Link to='/ForgotPassword' style={{textDecoration:'none', color:'#ff4141'}}><span>Click here</span></Link></p>
    </div>
  </div>
  )
}

export default Forgot
