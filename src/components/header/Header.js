import React, { useContext } from 'react'
import './Header.css'
import circles from '../../assets/circles.png'
import { NavProvider } from '../../context/NavContext'

const Header = () => {
  const { activeLinkId } = useContext(NavProvider)
  const navLinks = ['Intro', 'Skills', 'Work', 'Projects']
  const handleClickLogo = () => {
    document
      .getElementById('introSection')
      .scrollIntoView({ behavior: 'smooth' })
  }
  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`
    const handelClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <ul key={content}>
        <li>
          <button
            onClick={handelClickNav}
            className={activeLinkId === content ? 'activeSection' : ''}
          >
            {content}
          </button>
        </li>
      </ul>
    )
  }
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <img src={circles} alt='' onClick={handleClickLogo} />
          <nav>{navLinks.map((link) => renderNavLink(link))}</nav>
        </div>
      </div>
    </header>
  )
}

export default Header
