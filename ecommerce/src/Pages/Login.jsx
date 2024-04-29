import React from 'react'
import '../Pages/CSS/Login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
            <h1>Sign In</h1>
            <div className='login-fields'>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
            </div>
            <Link to='/Accountlogin'><button>Login</button></Link>
            <p className="login-login">Forgot username/password? <Link to='/Forgot' style={{textDecoration:'none'}}><span>Click here</span></Link></p>
      </div>
    </div>
  )
}

export default Login
