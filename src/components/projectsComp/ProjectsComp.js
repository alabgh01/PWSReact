import React from 'react'
import './ProjectsComp.css'

const ProjectsComp = ({ projectTitle, link, type, content, comments }) => {
  return (
    <div className='projectsComp'>
      <h3>{projectTitle}</h3>
      <p className='project-info'>
        <a href={link}>link</a>
      </p>
      <p className='project-info'>{type}</p>
      <ul>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className='project-comments'>{comments}</p>
    </div>
  )
}

export default ProjectsComp
