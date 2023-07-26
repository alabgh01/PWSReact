import React, { useState } from 'react'
import './ProjectsComp.css'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

const ProjectsComp = ({ projectTitle, link, type, content, comments }) => {
  const [showMore, setShowMore] = useState(false)
  const handelShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <div className='projectsComp'>
      <div className='projectHeader'>
        <h3>{projectTitle}</h3>
        <span onClick={handelShowMore}>
          {showMore ? (
            <img src={minus} alt='' className='plusMinus' />
          ) : (
            <img src={plus} alt='' className='plusMinus' />
          )}
        </span>
      </div>
      {showMore && (
        <div className='showingMoreHehe'>
          <ul>
            {content.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className='project-info'>Project type: {type}</p>
          {link && (
            <p className='project-info-link'>
              <a href={link} target='_blank' rel='noreferrer'>
                Check it out!
              </a>
            </p>
          )}
          {/* <p className='project-comments'>{comments}</p> */}
        </div>
      )}
    </div>
  )
}

export default ProjectsComp
