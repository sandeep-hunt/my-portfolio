import React from 'react'
import './Intro.css'
import profile from '../../img/profile.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-container">
        <div className="intro-left">
          <h1 className='intro-title'>Hy! I Am <span>Sandeep</span></h1>
          <p className='intro-tagline'>I'm a Web Developer based in India. Proficient in web development. I enjoy turning complex problems into simple, beautiful and intuitive solutions.</p>
          <div className="intro-buttons">
            <button className='btn btn-primary'>Hire Me</button>
          </div>
          <div className="intro-icons">
            <Github color='black' size='2.5rem' />
            <Linkedin color='black' size='2.5rem' />
          </div>
        </div>
        <div className="intro-right">
          <img src={profile} className='img-fluid intro-profile' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Intro