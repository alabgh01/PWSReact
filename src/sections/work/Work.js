import React from 'react'
import './Work.css'
import { workExperience } from '../../data/workExperience'
import WorkComp from '../../components/workComp/WorkComp'
import { useNav } from '../../hooks/useNav'
import rightStairs from '../../assets/rightStairs.svg'
import leftStairs from '../../assets/leftStairs.svg'

const Work = () => {
  const workRef = useNav('Work')
  return (
    <section className='container' id='workSection'>
      <h1 className='sectionH1'>Work Experience, Including Internships</h1>
      <div className='work' ref={workRef}>
        {workExperience.map((workSet) => (
          <div key={workSet.id}>
            {Number(workSet.id) % 2 === 0 ? (
              <div className='workCompContainer'>
                <WorkComp
                  key={workSet.id}
                  jobTitle={workSet.jobTitle}
                  company={workSet.company}
                  dates={workSet.dates}
                  location={workSet.location}
                  content={workSet.content}
                  comments={workSet.comments}
                  classAlign='workComp alignLeft'
                />
                <img
                  src={rightStairs}
                  alt=''
                  className='workStairs alignRight'
                />
              </div>
            ) : (
              <div className='workCompContainer'>
                <img src={leftStairs} alt='' className='workStairs alignLeft' />
                <WorkComp
                  key={workSet.id}
                  jobTitle={workSet.jobTitle}
                  company={workSet.company}
                  dates={workSet.dates}
                  location={workSet.location}
                  content={workSet.content}
                  comments={workSet.comments}
                  classAlign='workComp alignRight'
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
