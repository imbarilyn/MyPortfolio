import React from 'react'
import CTA from './CTA'
import image2 from '../assets/me3.png';
import Headersocials from './Headersocials';
import '../styles/Header.css'

function Header() {
  return (
    <header>
    <div className='container header__container'>
      <h5>Hello</h5>
      <h1>Linah Imbari</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA />
      {/* <Headersocials /> */}

      <div className='image'>
        <img src= {image2} alt ="image"/>
      </div>
      <a href = '#contact' className='scroll__down' >Scroll Down</a>
    </div> 

      
    </header>
  )
}

export default Header