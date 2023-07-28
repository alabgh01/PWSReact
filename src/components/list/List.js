import React, { useEffect, useState } from 'react'
import './List.css'
import skillsIcon from '../../assets/skillsIcon.svg'

const List = ({ listId, title, content }) => {
  const [isComing, setIsComing] = useState(false)
  useEffect(() => {
    setIsComing(true)
  }, [isComing])
  return (
    <div className='list'>
      <img src={skillsIcon} alt='' className='skillsIcon' />
      {/* <div key={isComing} className={isComing ? 'slim-shady' : ' '}></div> */}
      <div id={`skillList${listId}`} className='slim-shady'></div>
      <p className='skillsTitle'>{title}</p>
      <ul>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
