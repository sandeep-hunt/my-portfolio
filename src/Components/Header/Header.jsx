import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
          AJ Studio
          {/* <img src="https://www.tatanexarc.com/nexarc/static/appcode/images/header-footer/nexarc-logo.svg" alt="" /> */}
      </div>
      <div className="navbar-right">
          <ul className="navbar-nav">
              <li className="nav-item">Home</li>
              <li className="nav-item">About Us</li>
              <li className="nav-item">Services</li>
              <li className="nav-item">Portfolio</li>
          </ul>
          <button className='btn btn-outline-primary' type='button'>Login</button>
      </div>
    </nav>
  )
}

export default Header