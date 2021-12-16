import React from 'react'
import Loader from "../../components/Loader"

export default function QuizPageUI(props) {

  const { 
    history,
    isLoading,
    triviaRender,
    slidePosition,
    quizLength,
    selection,
    onNextClick,
    onQuizSubmit
   } = props

  return (
    <div className="quiz-page">
      <button 
        className="back-home-btn"
        onClick={() => history.push('/')}
      >
        <i className="fal fa-arrow-left"></i>
        Home
      </button>
      <div className="slide-container">
        {
          isLoading ? 
          <Loader /> :
          triviaRender
        }
      </div>
      <div className="navigation-container">
        {
          slidePosition !== (quizLength-1) ?
          <button 
            onClick={() => selection.length && onNextClick()}
            className={selection.length ? "" : "disabled"}
          >
            Next
          </button> :
          <button 
            className={!selection.length ? "disabled" : ""}
            onClick={() => onQuizSubmit()}
          >
            Submit
          </button>
        }
        </div>
    </div>
  )
}
