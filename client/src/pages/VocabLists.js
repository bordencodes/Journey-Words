import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VocabLists = () => {
  let navigate = useNavigate()

  const [phrases, updatePhrases] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/phrases')
      updatePhrases(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h3>Complete Words and Phrases Listing</h3>
      {phrases.map((phrase) => (
        <section key={phrase.id}>
          {/* <div>{phrase.theme}</div> */}
          <div>{phrase.phrase}</div>
          {/* <div>{phrase.definition}</div>
          <div>{phrase.example}</div> */}
        </section>
      ))}
    </div>
  )
}

export default VocabLists
