import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs'


function Headersocials() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/linah-m-8b2383127/' target= '_blank'> <BsLinkedin /></a>
        <a href='https://github.com/imbarilyn' target= '_blank'> <BsGithub /></a>
        <a href='https://instagram.com' target= '_blank'> <BsInstagram /></a>
    </div>
  )
}

export default Headersocials