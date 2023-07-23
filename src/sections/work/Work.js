import React from 'react'
import './Work.css'
import { workExperience } from '../../data/workExperience'
import WorkComp from '../../components/workComp/WorkComp'
import { useNav } from '../../hooks/useNav'

const Work = () => {
  const workRef = useNav('Work')
  return (
    <section className='container'>
      <div className='work' id='workSection' ref={workRef}>
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
    </section>
  )
}

export default Work
