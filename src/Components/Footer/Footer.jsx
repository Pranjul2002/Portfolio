import React from 'react'

import { Link } from 'react-router-dom'


import '../Footer/FooterStyle.css'
import githubIcon from '../Footer/Icons/github.png'
import twitterIcon from '../Footer/Icons/twitter.png'
import linkedinIcon from '../Footer/Icons/linkedin.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-head">
                Get in Touch
            </div>
            <div className='socialmedia-wrapper'>
                <div className="socialmedia">
                    <Link to="https://github.com/Pranjul2002" target='__blank'><img src={githubIcon} alt="" srcset="" /></Link>
                    <Link to="/"><img src={twitterIcon} alt="" srcset="" /></Link>
                    <Link to="/"><img src={linkedinIcon} alt="" srcset="" /></Link>
                </div>
            </div>
            <div className="made-by">
                Made by Pranjul Khankriyal.&#10084;
            </div>
        </div>
    </div>
  )
}

export default Footer