import React, { useContext, useEffect, useState } from 'react'
import Slide from "../components/Slide"
import { getTriviaQuestions } from '../services/triviaServices'
import '../styles/SlideContainer.css'
import '../styles/QuizPage.css'
import QuizBox from "../components/QuizBox"
import Loader from '../components/Loader'
import { useHistory } from "react-router-dom"
import { StoreContext } from "../store/store"

export default function QuizPage() {

  const { questionsNum, quizDifficulty, submission, setSubmission } = useContext(StoreContext)
  const [triviaQuestions, setTriviaQuestions] = useState([])
  const [slidePosition, setSlidePosition] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [selection, setSelection] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [questionText, setQuestionText] = useState('')
  const quizLength = triviaQuestions.length
  const history = useHistory()

  const triviaRender = triviaQuestions?.map((question, i) => {
    return <Slide 
      question={question}  
      index={i} 
      slidePosition={slidePosition}
      slidesLength={quizLength} 
      key={i}
    >
      <h3>{question.category}</h3>
      <QuizBox 
        question={question} 
        selection={selection}
        setSelection={setSelection}
        onTrueClick={() => onTrueClick(question)}
        onFalseClick={() => onFalseClick(question)}
      />
      <div className="slide-indicator">
        <span>{slidePosition+1} of {quizLength}</span>
      </div>
    </Slide>
  })

  const addAnAnswer = () => {
    setSubmission(prev => [...prev, {
      userChoice: selection,
      isCorrect: selection === correctAnswer,
      questionText,
      correctAnswer
    }])
  }

  const onTrueClick = (question) => {
    setSelection('True')
    setCorrectAnswer(question.correct_answer)
    setQuestionText(question.question)
  } 
  const onFalseClick = (question) => {
    setSelection('False')
    setCorrectAnswer(question.correct_answer)
    setQuestionText(question.question)
  }

  const onNextClick = () => {
    if(slidePosition < quizLength) {
      setSlidePosition(prev => prev + 1)
    }
    addAnAnswer()
    setSelection('')
  }

  const onQuizSubmit = () => {
    addAnAnswer()
    history.push('/results')
  }

  useEffect(() => {
    setIsLoading(true)
    getTriviaQuestions(+questionsNum, quizDifficulty, setTriviaQuestions)
    .then(() => {
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

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
