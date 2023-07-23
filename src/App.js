import React from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './sections/intros/Intro'
import Skills from './sections/skills/Skills'
import Work from './sections/work/Work'
import Projects from './sections/projects/Projects'
import NavContext from './context/NavContext'

function App() {
  return (
    <div className='App'>
      <NavContext>
        <Header />
        <Intro />
        <Skills />
        <Work />
        <Projects />
        <Footer />
      </NavContext>
    </div>
  )
}

export default App
