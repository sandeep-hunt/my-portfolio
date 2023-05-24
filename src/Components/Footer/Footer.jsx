import React from 'react'
import './Footer.css'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-icons">
                    <Github color='black' size='2rem' />
                    <Linkedin color='black' size='2rem' />
                </div>
                <div className="footer-copyright">
                    <p>© Copyright 2023 All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer