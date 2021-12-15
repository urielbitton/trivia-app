import React, { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext()

 
const StoreContextProvider = (props) => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === "true" ? true : false)

  useEffect(() => {
    localStorage.setItem('darkmode', !darkMode ? "false" : "true")  
  },[darkMode]) 

  return <StoreContext.Provider value={{ 
    darkMode, setDarkMode
  }}>
    {props.children}
  </StoreContext.Provider>
}
export default StoreContextProvider