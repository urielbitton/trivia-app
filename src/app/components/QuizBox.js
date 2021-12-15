import React, { useState } from 'react'
import '../styles/QuizBox.css'
import { convertQuotesToSymbol } from '../utilities/utilities'

export default function QuizBox(props) {

  const { 
    category,
    type, 
    difficulty,
    question, 
    correct_answer, 
    incorrect_answers,

  } = props.question

  const [selection, setSelection] = useState('')

  return (
    <div className="quiz-box">
      <p>{convertQuotesToSymbol(question)}</p>
      <div className="choices-container">
        <div 
          className={`select-answer ${selection === 'True' ? "active" : ""}`}
          onClick={() => setSelection('True')}
        >
          <span>True</span>
          <i className="fas fa-check-circle"></i>
        </div>
        <div 
          className={`select-answer ${selection === 'False' ? "active" : ""}`}
          onClick={() => setSelection('False')}
        >
          <span className={selection === 'False' ? "active" : ""}>False</span>
          <i className="fas fa-check-circle"></i>
        </div>
      </div>
    </div>
  )
}
