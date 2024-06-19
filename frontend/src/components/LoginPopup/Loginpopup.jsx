import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setShowLogin}) => {

    const[currState,setCurrState]=useState("Login")

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-input-popups">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required></input>
            <p>By Continuing , I agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"?<p>Create a New Account ? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
          <p>Already have an account , <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default Loginpopup