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
          <div>{phrase.phrase}</div>
        </section>
      ))}
      {/* <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="phrase">Enter Phrase Here: </label>
        <input id="phrase" value={form.phrase} onChange={handleFormChange} />
        <button type="submit">Remove Phrase</button>
      </form> */}
    </div>
  )
}

export default VocabLists
