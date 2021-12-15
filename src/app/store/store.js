import React, { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext()

 
const StoreContextProvider = (props) => {

  const [submissions, setSubmissions] = useState([])
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === "true" ? true : false)

  useEffect(() => {
    localStorage.setItem('darkmode', !darkMode ? "false" : "true")  
  },[darkMode]) 

  return <StoreContext.Provider value={{ 
    darkMode, setDarkMode,
    submissions, setSubmissions
  }}>
    {props.children}
  </StoreContext.Provider>
}
export default StoreContextProvider