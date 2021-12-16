import React, { useContext, useEffect } from 'react'
import '../../styles/ResultsPage.css'
import { StoreContext } from '../../store/store'
import ResultCard from "../../components/ResultCard"
import { useHistory } from "react-router-dom"
import ResultsPageUI from "./ResultsPageUI"

export default function ResultsPage() {

  const { submission, setSubmission, questionsNum } = useContext(StoreContext)
  const score = submission?.reduce((a,b) => a + (b.isCorrect ? 1 : 0), 0)
  const percentage = (score/questionsNum) * 100
  const history = useHistory()

  const resultCardsRender = submission?.map((answer, i) => {
    return <ResultCard 
      answer={answer} 
      key={i} 
    />
  })

  const startNewTrivia = () => {
    history.push('/quiz')
    setSubmission([])
  }

  useEffect(() => {
    if(!submission.length) {
      history.push('/')
    }
  },[])

  return (
    <ResultsPageUI 
      history={history}
      score={score}
      questionsNum={questionsNum}
      percentage={percentage}
      resultCardsRender={resultCardsRender} 
      startNewTrivia={startNewTrivia}
      setSubmission={setSubmission}
    />
  )
}
