import React from 'react'
import AppModal from "../components/AppModal"
import { AppInput, AppSelect } from '../components/AppInputs'

export default function HomepageUI(props) {

  const { 
    showModal, 
    setShowModal, 
    questionsNum,
    quizDifficulty,
    preQuestionsNum,
    setPreQuestionsNum, 
    preQuizDifficulty,
    setPreQuizDifficulty, 
    history, 
    difficultyOptions, 
    submitSettingsChanges 
  } = props

  return (
    <div className="homepage">
      <section className="intro-section">
        <h4>Home</h4>
        <h1>Welcome to the Trivia Challenge</h1>
      </section>
      <section className="middle-section">
        <p>You will be presented with {questionsNum} True or False questions</p>
        <small>Quiz Difficulty: {quizDifficulty}</small>
        <span>Can you score 100% ?</span>
      </section>
      <button onClick={() => history.push('/quiz')}>
        Begin
        <i className="fal fa-arrow-right"></i>
      </button>
      <section className="advanced-section">
        <span onClick={() => setShowModal(true)}>
          <i className="fal fa-cog"></i>
          Settings
        </span>
      </section>
      <AppModal
        title="Trivia Settings"
        showModal={showModal} 
        setShowModal={setShowModal}
        actions={
          <button onClick={() => submitSettingsChanges()}>Submit</button>
        }
      >
        <AppInput 
          title="Number Of Questions (Min: 0, Max: 20)" 
          type="number" 
          onChange={(e) => setPreQuestionsNum(e.target.value)}
          value={preQuestionsNum} 
          placeholder="10"
          min={1}
          max={20}
        />
        <AppSelect 
          title="Choose Quiz Difficulty"
          options={difficultyOptions}
          onChange={(e) => setPreQuizDifficulty(e.target.value)}
          value={preQuizDifficulty}
          namebased
        />
      </AppModal>
    </div>
  )
}
