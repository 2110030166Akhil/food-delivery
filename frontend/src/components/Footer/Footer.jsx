import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>This Tomato is build by Akhil.Took Reference from Youtube</p>
                <div className="footer-social-icons">
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-7207810097</li>
                    <li>palukuriakhil1@gmail.com</li>
                </ul>

            </div>
        </div>
      <hr />
      <p className="footer-copy-right">CopyRights © 2024 P Akhil Reserves All Rights</p>
    </div>
  )
}

export default Footer