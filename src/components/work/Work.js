import React from 'react'
import './Work.css'
import { workExperience } from '../../data/workExperience'
import WorkComp from '../workComp/WorkComp'

const Work = () => {
  return (
    <div className='container'>
      <div className='work' id='work'>
        {workExperience.map((workSet) => (
          <WorkComp
            key={workSet.id}
            jobTitle={workSet.jobTitle}
            company={workSet.company}
            dates={workSet.dates}
            location={workSet.location}
            content={workSet.content}
            comments={workSet.comments}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
