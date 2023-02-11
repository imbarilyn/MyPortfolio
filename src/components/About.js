import React from 'react'
import me from '../assets/me3.png';
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import '../styles/About.css'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className = 'about__container'>
        <div className='about__me'>
          <div className='about__image'>
            <img src= {me} alt="my photo" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6 months working</small>              
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>50+ clients</small>              
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6+</small>              
            </article>
          </div>
          <p>
            Hello there! My name is Linah Muhonja Imbari, I am a code innate and enthusiast person and I fell in love with programming just to make me happy. I want to become a better person by day by learning new concepts in tech.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About