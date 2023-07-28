import React from 'react'
import './Footer.css'
import gmailIcon from '../../assets/icons/gmail.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import githubIcon from '../../assets/icons/github.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'

const Footer = () => {
  return (
    <footer className='footer container'>
      <ul className='footer-ul'>
        <li>
          <a
            href='mailto:ghazalalabtah@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <img src={gmailIcon} alt='' className='socialIcons' />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/ghazal.al.568847'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebookIcon} alt='' className='socialIcons' />
          </a>
        </li>
        <li>
          <a
            href='https://www.github.com/alabgh01'
            target='_blank'
            rel='noreferrer'
          >
            <img src={githubIcon} alt='' className='socialIcons' />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/ghazal_alabtah'
            target='_blank'
            rel='noreferrer'
          >
            <img src={instagramIcon} alt='' className='socialIcons' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/ghazal-alabtah-00'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedinIcon} alt='' className='socialIcons' />
          </a>
        </li>
      </ul>
      <p className='copyrights'>GhazalAl.com 2023</p>
    </footer>
  )
}

export default Footer
