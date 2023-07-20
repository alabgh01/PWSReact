import React from 'react'
import './ProjectsComp.css'

const ProjectsComp = ({ projectTitle, link, type, content, comments }) => {
  return (
    <div className='projectsComp'>
      <h3>{projectTitle}</h3>
      <ul>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className='project-info'>Project type: {type}</p>
      {link && (
        <p className='project-info'>
          <a href={link} target='_blank' rel='noreferrer'>
            Check it out!
          </a>
        </p>
      )}
      <p className='project-comments'>{comments}</p>
    </div>
  )
}

export default ProjectsComp
