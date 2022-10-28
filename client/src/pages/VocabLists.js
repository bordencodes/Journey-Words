import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VocabLists = () => {
  let navigate = useNavigate()

  const [phrases, updatePhrases] = useState([])
  const [changePhrase, setPhrase] = useState({
    checkPhrase: ''
  })
  const [input, setInput] = useState('')

  const apiCall = async () => {
    let response = await axios.get('http://localhost:3001/phrases')
    updatePhrases(response.data)
  }

  useEffect(() => {
    apiCall()
  }, [])

  const handleChange = (e) => {
    setPhrase({ ...changePhrase, [e.target.id]: e.target.value })
    console.log(e.target.id)
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.put(
      `http://localhost:3001/phrases/${changePhrase.checkPhrase}`,
      input
    )
    apiCall()

    setInput({
      phrase: ''
    })
    setPhrase({
      checkPhrase: ''
    })
  }

  const inputChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  return (
    <div className="App">
      <h3 className="allPhrases">All Phrases</h3>
      <br />
      <div className="phraseGrid">
        {phrases.map((phrase) => (
          <section key={phrase.id}>
            <div>{phrase.phrase}</div>
          </section>
        ))}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="updateLabel" htmlFor="phrase">
          Enter Phrase Here:{' '}
        </label>
        <input id="phrase" onChange={inputChange} value={input.phrase} />
        <select
          value={changePhrase.checkPhrase}
          className="updateDropdown"
          id="checkPhrase"
          onChange={handleChange}
        >
          <option></option>
          {phrases.map((phrase) => (
            <option value={phrase._id}>{phrase.phrase}</option>
          ))}
        </select>
        <button className="listBtn" type="submit">
          Update Phrase
        </button>
      </form>
    </div>
  )
}

export default VocabLists
