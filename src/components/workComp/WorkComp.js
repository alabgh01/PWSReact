import React from 'react'
import './WorkComp.css'
import calendar from '../../assets/calendar.svg'
import map from '../../assets/map.svg'

const WorkComp = ({
  jobTitle,
  company,
  dates,
  location,
  content,
  comments,
  classAlign,
}) => {
  return (
    <div className={classAlign}>
      <h3>{jobTitle}</h3>
      <p className='job-info'>{company}</p>
      <div className='job-info inline'>
        <span className='calendar'>
          <img src={calendar} alt='' className='calendarImg' />
        </span>
        <p>{dates}</p>

        <span className='map'>
          <img src={map} alt='' className='mapImg' />
        </span>
        <p>{location}</p>
      </div>
      <ul>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      {/* <p className='job-comments'>{comments}</p> */}
    </div>
  )
}

export default WorkComp
