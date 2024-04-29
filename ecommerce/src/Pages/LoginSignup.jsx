import '../Pages/CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  
    return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
            <h1>Sign Up</h1>
            <div className='loginsignup-fields'>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
            </div>
            <Link to='/Login'><button>continue</button></Link>
            <p className="loginsignup-login">Already have an account? <Link to='/Login' style={{textDecoration:"none"}}><span>Login here</span></Link></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id='' />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
      </div>
    </div>
  )
}

export default LoginSignup
