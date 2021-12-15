import React from 'react'
import { useHistory } from "react-router-dom"
import '../styles/Homepage.css'

export default function Homepage() {

  const history = useHistory()

  return (
    <div className="homepage">
      <section className="intro-section">
        <h4>Home</h4>
        <h1>Welcome to the Trivia Challenge</h1>
      </section>
      <section className="middle-section">
        <p>You will be presented with 10 True or False questions</p>
        <span>Can you score 100%?</span>
      </section>
      <button onClick={() => history.push('/quiz')}>
        Begin
        <i className="fal fa-arrow-right"></i>
      </button>
    </div>
  )
}
