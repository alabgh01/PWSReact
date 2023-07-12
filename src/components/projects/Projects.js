import React from 'react'
import { projects } from '../../data/projects'
import './Projects.css'
import ProjectsComp from '../projectsComp/ProjectsComp'

const Projects = () => {
  return (
    <div className='container'>
      <div className='projects' id='projects'>
        {projects.map((projectSet) => (
          <ProjectsComp
            key={projectSet.id}
            projectTitle={projectSet.projectTitle}
            link={projectSet.link}
            type={projectSet.type}
            content={projectSet.content}
            comments={projectSet.comments}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
