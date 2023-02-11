import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { DiRuby } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import { SiPython } from 'react-icons/si'
import  '../styles/Experience.css';

function Experience() {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h1>My Experience</h1>
      <div className='container__experience container'>
        <div className='frontend__container'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3  className='experience__icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1  className='experience__icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact  className='experience__icon'/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBootstrap  className='experience__icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> 
          </div>        
        </div> 

          <div className='backend__container'>
            <h3>Backend Experience</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                  <DiRuby  className='experience__icon'/>
                  <div>
                  <h4>Ruby on Rails</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiMysql  className='experience__icon'/>
                  <div>
                  <h4>MySQl</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <SiPython  className='experience__icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
            </div>            
          </div>
      </div>
    </section>
  )
}

export default Experience
