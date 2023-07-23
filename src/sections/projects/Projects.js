import React from 'react'
import { projects } from '../../data/projects'
import './Projects.css'
import ProjectsComp from '../../components/projectsComp/ProjectsComp'
import { useNav } from '../../hooks/useNav'

const Projects = () => {
  const projectsRef = useNav('Projects')
  return (
    <section className='container'>
      <div className='projects' id='projectsSection' ref={projectsRef}>
        {projects.map((projectSet) => (
          <ProjectsComp
            key={projectSet.id}
            projectTitle={projectSet.projectTitle}
            link={projectSet.link}
            type={projectSet.type}
            content={projectSet.content}
            comments={projectSet.comments}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
