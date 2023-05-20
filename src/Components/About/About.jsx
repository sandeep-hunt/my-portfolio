import React from 'react'
import './About.css'
import Profile1 from '../../img/profile1.png';

const About = () => {
  return (
    <div className="about">
        <div className="about-container">
            <div className="about-left">
                <img src={Profile1} className='img-fluid about-profile' alt="" />
            </div>
            <div className="about-right">
                <h2 className='about-title'>About Me</h2>
                <p className='about-text'>I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects. I'm quietly confident, naturally curious, and perpetually working on improving my</p>
                <span>Skills: HTML, CSS, JavaScript, Bootstrap,  ReactJS</span>
                <div className="about-button">
                    <button className='btn btn-outline-primary'>Download CV</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About