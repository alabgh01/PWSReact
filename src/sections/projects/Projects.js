import React from 'react'
import { projects } from '../../data/projects'
import './Projects.css'
import ProjectsComp from '../../components/projectsComp/ProjectsComp'
import { useNav } from '../../hooks/useNav'

const Projects = () => {
  const projectsRef = useNav('Projects')
  return (
    <section className='container' id='projectsSection'>
      <h1 className='sectionH1'>Projects: Academic, Work, and Personal</h1>
      <div className='projects' ref={projectsRef}>
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
