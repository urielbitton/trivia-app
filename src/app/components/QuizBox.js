import React from 'react'
import '../styles/QuizBox.css'
import { convertQuotesToSymbol } from '../utilities/utilities'

export default function QuizBox(props) {

  const { question } = props.question
  const { selection, onTrueClick, onFalseClick } = props

  return (
    <div className="quiz-box">
      <p>{convertQuotesToSymbol(question)}</p>
      <div className="choices-container">
        <div 
          className={`select-answer ${selection === 'True' ? "active" : ""}`}
          onClick={() => onTrueClick()}
        >
          <span>True</span>
          <i className="fas fa-check-circle"></i>
        </div>
        <div 
          className={`select-answer ${selection === 'False' ? "active" : ""}`}
          onClick={() => onFalseClick()}
        >
          <span className={selection === 'False' ? "active" : ""}>False</span>
          <i className="fas fa-check-circle"></i>
        </div>
      </div>
    </div>
  )
}
