import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VocabLists = () => {
  let navigate = useNavigate()

  const [phrases, updatePhrases] = useState([])
  const [changePhrase, setPhrase] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/phrases')
      updatePhrases(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (e) => {
    setPhrase({ ...changePhrase, [e.target.id]: e.target.value })
    console.log(changePhrase.checkPhrase)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.put(
      `http://localhost:3001/phrases/${changePhrase.checkPhrase}`,
      input
    )
    console.log(response)
  }

  const inputChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  return (
    <div className="App">
      <h3>Complete Words and Phrases Listing</h3>
      {phrases.map((phrase) => (
        <section key={phrase.id}>
          <div>{phrase.phrase}</div>
        </section>
      ))}
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="phrase">Enter Phrase Here: </label>
        <input id="phrase" onChange={inputChange} />
        <select id="checkPhrase" onChange={handleChange}>
          <option></option>
          {phrases.map((phrase) => (
            <option value={phrase._id}>{phrase.phrase}</option>
          ))}
        </select>
        <button type="submit">Update Phrase</button>
      </form>
    </div>
  )
}

export default VocabLists
