import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills" id='skills'>
      <div className="skills-container">
        <h2 className='s-title'>Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-card">
            <div className="skills-card-head">
              <h2 className="skills-card-title">Frontend</h2>
            </div>
            <div className="skills-card-body">
              <span>HTML, CSS, JavaScript, Bootstrap, React, Redux, NPM, Git, Postman</span>
            </div>
          </div>
          <div className="skills-card">
            <div className="skills-card-head">
              <h2 className="skills-card-title">Backend</h2>
            </div>
            <div className="skills-card-body">
              <span>NodeJS, MongoDB, Git, Postman</span>
            </div>
          </div>
          <div className="skills-card">
            <div className="skills-card-head">
              <h2 className="skills-card-title">Database</h2>
            </div>
            <div className="skills-card-body">
              <span>PostgreSql, MYSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills