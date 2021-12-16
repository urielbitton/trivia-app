import React, { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext()

 
const StoreContextProvider = (props) => {

  const [submission, setSubmission] = useState([])
  const [questionsNum, setQuestionsNum] = useState(10)
  const [quizDifficulty, setQuizDifficulty] = useState('hard')
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === "true" ? true : false)

  useEffect(() => {
    localStorage.setItem('darkmode', !darkMode ? "false" : "true")  
  },[darkMode]) 

  return <StoreContext.Provider value={{ 
    darkMode, setDarkMode,
    submission, setSubmission,
    questionsNum, setQuestionsNum,
    quizDifficulty, setQuizDifficulty
  }}>
    {props.children}
  </StoreContext.Provider>
}
export default StoreContextProvider