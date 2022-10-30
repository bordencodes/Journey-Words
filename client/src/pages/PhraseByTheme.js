import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PhraseByTheme = () => {
  const [phraseTheme, updateCollections] = useState([])
  const [addPhrase, setAddPhrase] = useState({
    theme: '',
    phrase: '',
    definition: '',
    example: ''
  })

  const [changeTheme, setTheme] = useState({
    checkThemePhrase: ''
  })

  const [phraseInput, setPhraseInput] = useState('')

  const [remove, removePhrase] = useState('')

  const { id } = useParams()

  const apiCall = async () => {
    // let response = await axios
    //   .get(`http://localhost:3001/themes/${id}`)
    //   .then((response) => {
    //     updateCollections(response.data)
    //   })
    let response = await axios.get(`/themes/${id}`).then((response) => {
      updateCollections(response.data)
    })
  }

  useEffect(() => {
    apiCall()
  }, [])

  const handleChange = (e) => {
    setTheme({ ...changeTheme, [e.target.id]: e.target.value })
  }

  const handlePhraseSubmit = async (e) => {
    e.preventDefault()
    // let response = await axios.post(`http://localhost:3001/phrases`, addPhrase)
    let response = await axios.post(`/phrases`, addPhrase)

    apiCall()

    setAddPhrase({
      theme: '',
      phrase: '',
      definition: '',
      example: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // let response = await axios.put(
    //   `http://localhost:3001/phrases/${changeTheme.checkThemePhrase}`,
    //   phraseInput
    // )
    let response = await axios.put(
      `/phrases/${changeTheme.checkThemePhrase}`,
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

  const deletePhrase = async (e) => {
    // let response = await axios.delete(
    //   `http://localhost:3001/phrases/${remove.phrase}`
    // )
    let response = await axios.delete(`/phrases/${remove.phrase}`)
    apiCall()
  }

  const addNewPhrase = (e) => {
    setAddPhrase({ ...addPhrase, [e.target.id]: e.target.value, theme: id })
  }

  const inputChange = (e) => {
    setPhraseInput({ ...phraseInput, [e.target.id]: e.target.value })
  }

  const handlePhraseChange = async (e) => {
    removePhrase({ ...remove, [e.target.id]: e.target.value })
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
      <br />
      <label className="formLabel" htmlFor="phrase">
        Select Phrase:{' '}
      </label>
      <select
        className="deleteDropdown"
        id="phrase"
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
    </div>
  )
}

export default PhraseByTheme
