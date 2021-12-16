import React, { useContext, useEffect } from 'react'
import '../styles/ResultsPage.css'
import { StoreContext } from '../store/store'
import ResultCard from "../components/ResultCard"
import { useHistory } from "react-router-dom"

export default function ResultsPage() {

  const { submission, setSubmission, questionsNum } = useContext(StoreContext)
  const score = submission?.reduce((a,b) => a + (b.isCorrect ? 1 : 0), 0)
  const percentage = (score/questionsNum) * 100
  const history = useHistory()

  const resultCardsRender = submission?.map((answer, i) => {
    return <ResultCard 
      answer={answer} 
      key={i} 
    />
  })

  const startNewTrivia = () => {
    history.push('/quiz')
    setSubmission([])
  }

  useEffect(() => {
    if(!submission.length) {
      history.push('/')
    }
  },[])

  return (
    <div className="results-page">
      <div className="titles">
        <h3>You Scored</h3>
        <h4>{score} / {questionsNum} - {percentage.toFixed(1)}%</h4>
      </div>
      <div className="results-container">
        {resultCardsRender}
      </div>
      <button 
        className="start-over-btn"
        onClick={() => startNewTrivia()}
      >
        Start Over
        <i className="fal fa-arrow-right"></i>
      </button>
    </div>
  )
}
