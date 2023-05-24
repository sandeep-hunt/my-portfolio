import React from 'react'
import './Header.css'
import icon from '../../img/logo.png';
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="navbar sticky">
      <div className="navbar-left">
          <img src={icon} className='navbar-brand' alt="" /><span className='navbar-brand-text'>andeep</span>
      </div>
      <div className="navbar-right">
          <ul className="navbar-nav">
            <Link spy={true} to="into" smooth="true" activeClass="active">
              <li className="nav-item">Home</li>
            </Link>
            <Link spy={true} to="about" smooth="true">
              <li className="nav-item">About Us</li>
            </Link>
            <Link spy={true} to="skills" smooth="true">
              <li className="nav-item">Skills</li>
            </Link>
            <Link spy={true} to="projects" smooth="true">
              <li className="nav-item">Projects</li>
            </Link>
          </ul>
          <button className='btn btn-outline-primary' type='button'>Download CV</button>
      </div>
    </nav>
  )
}

export default Header