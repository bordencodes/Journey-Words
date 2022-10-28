import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const PhraseByTheme = () => {
  let navigate = useNavigate()

  const [phraseTheme, updateCollections] = useState([])
  const [changeTheme, setTheme] = useState({
    checkThemePhrase: ''
  })

  const [phraseInput, setPhraseInput] = useState('')

  const { id } = useParams()

  const apiCall = async () => {
    let response = await axios
      .get(`http://localhost:3001/themes/${id}`)
      .then((response) => {
        updateCollections(response.data)
      })
  }

  useEffect(() => {
    apiCall()
  }, [])

  const handleChange = (e) => {
    setTheme({ ...changeTheme, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.put(
      `http://localhost:3001/phrases/${changeTheme.checkThemePhrase}`,
      phraseInput
    )

    apiCall()

    setPhraseInput({
      themePhrase: ''
    })

    setTheme({
      checkThemePhrase: ''
    })
  }

  const inputChange = (e) => {
    setPhraseInput({ ...phraseInput, [e.target.id]: e.target.value })
  }

  return (
    <div className="App">
      <div className="phraseWrapper">
        {phraseTheme.map((theme) => (
          <div className="themesContainer">
            <div className="topWord">{theme.phrase}</div>
            <div>
              <strong>Definition:</strong> {theme.definition}
            </div>
            <div>
              <strong>Example:</strong> {theme.example}
            </div>
            <br />
          </div>
        ))}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="phrase">
          <strong>Enter Phrase Here:</strong>{' '}
        </label>
        <input
          id="phrase"
          onChange={inputChange}
          value={phraseInput.themePhrase}
        />
        <select
          value={changeTheme.checkThemePhrase}
          className="updateDropdown"
          id="checkThemePhrase"
          onChange={handleChange}
        >
          <option></option>
          {phraseTheme.map((phrase) => (
            <option value={phrase._id}>{phrase.phrase}</option>
          ))}
        </select>
        <button className="listBtn" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default PhraseByTheme
