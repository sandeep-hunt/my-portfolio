import React from 'react'
import './Skills.css'
import Profile1 from '../../img/profile1.png';

const Skills = () => {
  return (
    <div className="skills">
        <div className="skills-container">
            <div className="skills-left">
                <img src={Profile1} className='img-fluid skills-profile' alt="" />
            </div>
            <div className="skills-right">
                <h2 className='skills-title'>About Me</h2>
                <p className='skills-text'>I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects. I'm quietly confident, naturally curious, and perpetually working on improving my</p>
                <span>Skills: HTML, CSS, JavaScript, Bootstrap,  ReactJS</span>
                <div className="skills-button">
                    <button className='btn btn-outline-primary'>Download CV</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills