import React from 'react'
import '../styles/ResultCard.css'
import { convertQuotesToSymbol } from '../utilities/utilities'

export default function ResultCard(props) {

  const { isCorrect, questionText, correctAnswer, userChoice } = props.answer

  return (
    <div 
      className="result-card" 
      title={`You selected: ${userChoice}`}
    >
      <div>
        <i className={isCorrect ? "fad fa-check" : "fad fa-times"}></i>
        <p>{convertQuotesToSymbol(questionText)}</p>
      </div>
      <small>{correctAnswer}</small>
    </div>
  )
}
