import React, { useEffect, useState } from 'react'
import Slide from "../components/Slide"
import { getTriviaQuestions } from '../services/triviaServices'
import '../styles/SlideContainer.css'
import '../styles/QuizPage.css'
import QuizBox from "../components/QuizBox"
import Loader from '../components/Loader'

export default function QuizPage() {

  const [triviaQuestions, setTriviaQuestions] = useState([])
  const [slidePosition, setSlidePosition] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const quizLength = triviaQuestions.length

  const triviaRender = triviaQuestions?.map((question, i) => {
    return <Slide 
      question={question}  
      index={i} 
      slidePosition={slidePosition}
      slidesLength={quizLength} 
      key={i}
    >
      <h3>{question.category}</h3>
      <QuizBox question={question} />
      <div className="slide-indicator">
        <span>{slidePosition} of {quizLength}</span>
      </div>
    </Slide>
  })

  useEffect(() => {
    setIsLoading(true)
    getTriviaQuestions(setTriviaQuestions)
    .then(() => {
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div className="quiz-page">
      <div className="slide-container">
        {
          isLoading ? 
          <Loader /> :
          triviaRender
        }
      </div>
      <div className="navigation-container">
          <button 
            onClick={() => slidePosition > 0 && setSlidePosition(prev => prev - 1)}
            className={!(slidePosition > 0) ? "disabled" : ""}
          >
            Back
          </button>
          {
            slidePosition !== quizLength ?
            <button 
              onClick={() => slidePosition < quizLength && setSlidePosition(prev => prev + 1)}
              className={!(slidePosition < quizLength) ? "disabled" : ""}
            >
              Next
            </button> :
            <button>Submit</button>
          }
          
        </div>
    </div>
  )
}
