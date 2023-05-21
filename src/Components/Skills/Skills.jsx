import React from 'react'
import './Skills.css'
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <h2 className='s-title'>Skills</h2>
        {/* <div className="skills-wrapper">
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
        </div> */}
        <div className="skills-wrapper">
          <div className="skills-icons">
            <div className="icon">
              <Icon icon="logos:html-5" font-size="3rem"/>
              <span>HTML</span>
            </div>
            <div className="icon">
              <Icon icon="logos:css-3" font-size="3rem"/>
              <span>CSS</span>
            </div>
            <div className="icon">
              <Icon icon="logos:javascript" font-size="3rem"/>
              <span>JavaScript</span>
            </div>
            <div className="icon">
              <Icon icon="logos:bootstrap" font-size="3rem"/>
              <span>Bootstrap</span>
            </div>
            <div className="icon">
              <Icon icon="logos:react" font-size="3rem"/>
              <span>React</span>
            </div>
            <div className="icon">
              <Icon icon="logos:php" font-size="3rem"/>
              <span>PHP</span>
            </div>
            <div className="icon">
              <Icon icon="logos:postgresql" font-size="3rem"/>
              <span>PostgreSql</span>
            </div>
            <div className="icon">
              <Icon icon="logos:mysql-icon" font-size="3rem"/>
              <span>MYSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills