import React, { useContext } from 'react'
import '../styles/AppContainer.css'
import { Route } from 'react-router'
import { Switch } from "react-router-dom"
import { StoreContext } from "../store/store"
import Homepage from "../pages/Home/Homepage"
import QuizPage from "../pages/Quiz/QuizPage"
import ResultsPage from "../pages/Results/ResultsPage"

export default function AppContainer() {

  const {darkMode} = useContext(StoreContext)

  return (
    <div className={`app-container ${darkMode ? "darkmode" : ""}`}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>
      </Switch> 
    </div>
  )
}
