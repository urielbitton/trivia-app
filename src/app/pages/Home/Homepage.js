import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import '../../styles/Homepage.css'
import { StoreContext } from "../../store/store"
import HomepageUI from "./HomepageUI"

export default function Homepage() {

  const { questionsNum, setQuestionsNum, quizDifficulty, setQuizDifficulty } = useContext(StoreContext)
  const [showModal, setShowModal] = useState(false)
  const [preQuestionsNum, setPreQuestionsNum] = useState(questionsNum)
  const [preQuizDifficulty, setPreQuizDifficulty] = useState(quizDifficulty)
  const history = useHistory()

  const difficultyOptions = [
    {name: 'Easy', value: 'easy'},
    {name: 'Medium', value: 'medium'},
    {name: 'Hard', value: 'hard'}, 
  ]

  const submitSettingsChanges = () => {
    setQuestionsNum(preQuestionsNum)
    setQuizDifficulty(preQuizDifficulty)
    setShowModal(false)
  }

  return (
    <HomepageUI 
      showModal={showModal}
      setShowModal={setShowModal}
      questionsNum={questionsNum}
      setQuestionsNum={setQuestionsNum}
      quizDifficulty={quizDifficulty}
      setQuizDifficulty={setQuizDifficulty}
      preQuestionsNum={preQuestionsNum}
      setPreQuestionsNum={setPreQuestionsNum}
      preQuizDifficulty={preQuizDifficulty}
      setPreQuizDifficulty={setPreQuizDifficulty}
      history={history}
      difficultyOptions={difficultyOptions}
      submitSettingsChanges={submitSettingsChanges}
    />
  )
}
