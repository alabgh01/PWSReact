import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar container'>
      <nav>
        <ul className='navbar-ul'>
          {/* <li>
            <a href='#intro'>Intro</a>
          </li> */}
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#work'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#artwork'>Artwork</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
