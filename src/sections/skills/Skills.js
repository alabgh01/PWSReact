import React from 'react'
import './Skills.css'
import List from '../../components/list/List'
import { skills } from '../../data/skills.js'
import { useNav } from '../../hooks/useNav'

const Skills = () => {
  const skillsRef = useNav('Skills')

  return (
    <section className='container' id='skillsSection'>
      <h1 className='sectionH1'>Skills: Computer and Other</h1>
      <div className='skills' ref={skillsRef}>
        {skills.map((skillSet) => (
          <List
            key={skillSet.id}
            listId={skillSet.id}
            title={skillSet.title}
            content={skillSet.content}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
