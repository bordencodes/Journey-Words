import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const PhraseByTheme = () => {
  let navigate = useNavigate()

  const [phraseTheme, updateCollections] = useState([])
  //adding ADD phrase
  const [addPhrase, setAddPhrase] = useState({
    theme: '',
    phrase: '',
    definition: '',
    example: ''
  })
  //delete above const if necessary
  const [changeTheme, setTheme] = useState({
    checkThemePhrase: ''
  })

  const [phraseInput, setPhraseInput] = useState('')
  //add Remove phrase
  const [remove, removePhrase] = useState('')

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

  //handle for addPhrase
  const handlePhraseSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.post(`http://localhost:3001/phrases`, addPhrase)

    apiCall()

    setAddPhrase({
      theme: '',
      phrase: '',
      definition: '',
      example: ''
    })
  }

  //Delete above handle if necessary

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.put(
      `http://localhost:3001/phrases/${changeTheme.checkThemePhrase}`,
      phraseInput
    )

    apiCall()

    setPhraseInput({
      phrase: ''
    })

    setTheme({
      checkThemePhrase: ''
    })
  }

  //remove function here

  const deletePhrase = async (e) => {
    let response = await axios.delete(
      `http://localhost:3001/phrases/${remove.deletePhrase}`
    )
    apiCall()
  }

  //end of remove function

  //adding

  const addNewPhrase = (e) => {
    setAddPhrase({ ...addPhrase, [e.target.id]: e.target.value, theme: id })
  }

  //delete above in necessary

  const inputChange = (e) => {
    setPhraseInput({ ...phraseInput, [e.target.id]: e.target.value })
  }

  //delete below if necessary

  const handlePhraseChange = async (e) => {
    removePhrase({ ...remove, [e.target.id]: e.target.value })
  }

  //delete above if necessary

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
      {/* ADD PHRASE button here */}
      <form onSubmit={handlePhraseSubmit}>
        <label className="formLabel" htmlFor="phrase">
          Phrase:{' '}
        </label>
        <input id="phrase" value={addPhrase.phrase} onChange={addNewPhrase} />
        <label className="formLabel" htmlFor="definition">
          {' '}
          Definition:{' '}
        </label>
        <input
          id="definition"
          value={addPhrase.definition}
          onChange={addNewPhrase}
        />
        <label className="formLabel" htmlFor="example">
          {' '}
          Example:{' '}
        </label>
        <input id="example" value={addPhrase.example} onChange={addNewPhrase} />
        <button className="homeBtn" type="submit">
          Add to List
        </button>
      </form>
      <br />
      {/* remove the above it doesn't work */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="phrase">
          <strong>Enter Phrase Here:</strong>{' '}
        </label>
        <input id="phrase" onChange={inputChange} value={phraseInput.phrase} />
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
      {/* adding REMOVE Form here */}
      <br />
      <label className="formLabel" htmlFor="phrase">
        Select Phrase:{' '}
      </label>
      <select
        className="deleteDropdown"
        id="deleteList"
        onChange={handlePhraseChange}
      >
        <option></option>
        {phraseTheme.map((phrase) => (
          <option value={phrase._id}>{phrase.phrase}</option>
        ))}
      </select>
      <button className="homeBtn" type="submit" onClick={deletePhrase}>
        Remove Phrase
      </button>
      {/* delete above if does not work */}
    </div>
  )
}

export default PhraseByTheme
