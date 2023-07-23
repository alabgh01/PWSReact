import React, { createContext, useState } from 'react'

export const NavProvider = createContext()

const NavContext = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState('')
  const providerVal = {
    activeLinkId,
    setActiveLinkId,
  }
  return (
    <NavProvider.Provider value={providerVal}>{children}</NavProvider.Provider>
  )
}

export default NavContext
