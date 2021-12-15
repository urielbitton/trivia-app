import axios from 'axios'

export const getTriviaQuestions = (setResults) => {
  var options = {
    method: 'GET',
    url: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  }
  return axios.request(options).then((response) => {
    setResults(response.data.results)
    console.log(response.data.results)
  }).catch((error) => {
    console.error(error)
  })
}