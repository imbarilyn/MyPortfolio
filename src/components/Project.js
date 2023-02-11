import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'


function Project( {name, image, github, demo, description }) {


  return (
    <div className='projectItem'>
      {/* <div className='project-pic' style = {{backgroundImage: `url(${image})`}}>
      </div> */}
        <img  src = {image}/>
        <h4>{name}</h4>
        <small>{description}</small>
        <div  className='project__button'>
          <div className='button'>
            <p>
              <a href={demo} target= "_blank">demo</a>
            </p>        
          </div>
          <div className='button'>
            <p>        
              <a href={github} target= "_blank">github <HiOutlineExternalLink  className='project__icon'/></a>
              
            </p>
          </div>
        </div>        
    </div>
  )
}

export default Project