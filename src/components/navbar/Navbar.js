import React from 'react'
import ghazalsCafeLogo from '../../assets/ghazalsCafeLogo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className='logoImg'>
        <img src={ghazalsCafeLogo} alt='' />
      </div>
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
