import React from 'react'
import './WorkComp.css'

const WorkComp = ({
  jobTitle,
  company,
  dates,
  location,
  content,
  comments,
}) => {
  return (
    <div className='workComp'>
      <h3>{jobTitle}</h3>
      <p className='job-info'>{company}</p>
      <p className='job-info inline'>
        {/* <span className='calendar'></span> */}
        {dates}
      </p>
      <p className='job-info inline'>
        {/* <span className='map'></span> */}
        {location}
      </p>
      <ul>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className='job-comments'>{comments}</p>
    </div>
  )
}

export default WorkComp
