import React from 'react'
import { Link } from 'react-router-dom'

import '../Menu/MenuStyle.css'
import LogoAvatar from '../Menu/images/logo.jpeg'

const Menu = () => {
  return (
    <div className='menu'>
        <div className="menu-bar">
          <img src={LogoAvatar} alt="" className='logo'/>
            <div className="menu-option-box">
                <Link to="/" className='menu-option-item'>Home</Link>
                <Link to="/resume" className='menu-option-item'>Resume</Link>
                <Link to="/projects" className='menu-option-item'>Projects</Link>
                <Link to="/skills" className='menu-option-item'>Skills</Link>
                <Link to="/" className='menu-option-item'>About</Link>
            </div>
        </div>
    </div>
  )
}

export default Menu