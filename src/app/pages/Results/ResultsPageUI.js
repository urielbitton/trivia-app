import React from 'react'

export default function ResultsPageUI(props) {

  const {
    history,
    score,
    questionsNum,
    percentage,
    resultCardsRender, 
    startNewTrivia,
    setSubmission
  } = props

  return (
    <div className="results-page">
      <button 
        className="back-home-btn"
        onClick={() => {
          setSubmission([])
          history.push('/')
        }}
      >
        <i className="fal fa-arrow-left"></i>
        Home
      </button>
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
