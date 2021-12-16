import axios from 'axios'

export const getTriviaQuestions = (amount, difficulty, setResults) => {
  var options = {
    method: 'GET',
    url: `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`,
  }
  return axios.request(options).then((response) => {
    setResults(response.data.results)
    console.log(response.data.results)
  }).catch((error) => {
    console.error(error)
  })
}