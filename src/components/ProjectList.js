import React from 'react';
import  { data } from '../Helpers/data';
import Project from './Project';
import '../styles/Project.css'


function ProjectList() {
    const projects = data.map((dataItem, key) => {
    return (
    <Project key = {key} 
    name = {dataItem.name} image = {dataItem.image}
    description = {dataItem.description} demo = {dataItem.demo} github = {dataItem.github}
    />
    )
})
  return (
    <section className= 'projects'>
        <h5>What I Worked on</h5>
        <h1>My Projects</h1>
        <div className='projectList'>
          {projects}
        </div>
    </section>
  )
}

export default ProjectList