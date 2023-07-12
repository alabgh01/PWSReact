import React from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intros/Intro'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Skills />
      <Work />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
