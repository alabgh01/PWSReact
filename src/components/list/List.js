import React from 'react'
import './List.css'

const List = ({ title, content }) => {
  return (
    <div className='list'>
      <p>{title}</p>
      <ul>
        {content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
