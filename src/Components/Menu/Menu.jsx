import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import '../Menu/MenuStyle.css';
import LogoAvatar from '../Menu/images/logo.jpeg';
//const LogoAvatar=lazy((()=>import('../Menu/images/logo.jpeg')))

const Menu = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll'); // Disable scrolling when menu is open
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll'); // Cleanup when component unmounts
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close menu on link click
    }
  };

  return (
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-bar">
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
            <img src={LogoAvatar} alt="Logo" className='logo'/>
          
            <div className={`menu-option-box ${isMenuOpen ? 'show' : ''}`}>
              <button className="menu-button-X" onClick={toggleMenu}>
                X
              </button>
                <Link to="/" className='menu-option-item' onClick={handleLinkClick}>Home</Link>
                <Link to="/resume" className='menu-option-item' onClick={handleLinkClick}>Resume</Link>
                <Link to="/projects" className='menu-option-item' onClick={handleLinkClick}>Projects</Link>
                <Link to="/skills" className='menu-option-item' onClick={handleLinkClick}>Skills</Link>
                <Link to="/" className='menu-option-item' onClick={handleLinkClick}>About</Link>
            </div>
        </div>
    </div>
  );
};

export default Menu;