import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const PhraseByTheme = () => {
  let navigate = useNavigate()

  const [phraseTheme, updateCollections] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios
        .get(`http://localhost:3001/themes/${id}`)
        .then((response) => {
          updateCollections(response.data)
        })
    }
    apiCall()
  }, [])

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
      <form>
        <label>
          <strong>Enter Phrase Here:</strong>{' '}
        </label>
        <input />
        <select
        // value={changePhrase.checkPhrase}
        // className="updateDropdown"
        // id="checkPhrase"
        // onChange={handleChange}
        >
          <option></option>
          {/* {phrases.map((phrase) => (
            <option value={phrase._id}>{phrase.phrase}</option>
          ))} */}
        </select>
        <button className="listBtn" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default PhraseByTheme
