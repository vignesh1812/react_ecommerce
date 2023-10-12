import React from 'react'
import './CSS/LoginSignup.css';
import { NavLink } from 'react-router-dom';
const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-container">
        <h1>Sign Up</h1>
        <div className="LoginSignup-feilds">
          <input type="text" name="" placeholder='your Name' id="text" />
          <input type="email" name="" placeholder='Enter Email' id="email" />
          <input type="password" name="" placeholder='password' id="password" />
        </div>
        <div className="LoginSignup-agree">
          <input type="checkbox" name="" id="checkid" />
          <label htmlFor="checkid">By Continuing,I agree to the use of terms and privacy policy.</label>
        </div>
        <button>Continue</button>
        <p className="LoginSignup-login">
           Already have an account? <NavLink className='link' to='/'><span className=''>Login Here</span></NavLink>
        </p>
  
      </div>
    </div>
  )
}

export default LoginSignup