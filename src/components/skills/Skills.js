import React from 'react'
import './Skills.css'
import List from '../list/List'
import { skills } from '../../data/skills.js'

const Skills = () => {
  return (
    <div className='container'>
      <p>Skills</p>
      <div className='skills' id='skills'>
        {skills.map((skillSet) => (
          <List
            key={skillSet.id}
            title={skillSet.title}
            content={skillSet.content}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
