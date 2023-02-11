import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Linah Muhonja</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#project'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/linah-m-8b2383127/' target= '_blank'> <FaFacebookF /></a>
        <a href= 'https://github.com/imbarilyn' target= '_blank'> <FiInstagram /></a>
        <a href= 'https://instagram.com' target= '_blank'> <IoLogoTwitter /></a>
        <a href='#'> <BsWhatsapp /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy;Linah Muhonja Imbari. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer