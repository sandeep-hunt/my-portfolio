import React from 'react'
import './Header.css'
import icon from '../../img/logo.png';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
          <img src={icon} className='navbar-brand' alt="" /><span className='navbar-brand-text'>andeep</span>
      </div>
      <div className="navbar-right">
          <ul className="navbar-nav">
              <li className="nav-item">Home</li>
              <li className="nav-item">About Us</li>
              <li className="nav-item">Services</li>
              <li className="nav-item">Portfolio</li>
          </ul>
          <button className='btn btn-outline-primary' type='button'>Download CV</button>
      </div>
    </nav>
  )
}

export default Header