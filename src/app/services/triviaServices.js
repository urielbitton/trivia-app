import axios from 'axios'

export const getTriviaQuestions = (amount, difficulty, setResults) => {
  var options = {
    method: 'GET',
    url: `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`,
  }
  return axios.request(options).then((response) => {
    if(response.response_code === 2) {
      console.log('Please check the api url provided')
    }
    else {
      setResults(response.data.results)
    }
    console.log(response.data)
  }).catch((error) => {
    console.error(error)
  })
}