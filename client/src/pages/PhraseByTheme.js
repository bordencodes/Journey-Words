import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const PhraseByTheme = () => {
  let navigate = useNavigate()

  const [phraseTheme, updateCollections] = useState([])
  const { id } = useParams()
  console.log(id)

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
      {phraseTheme.map((theme) => (
        <div>
          <div>{theme.phrase}</div>
          <div>Definition: {theme.definition}</div>
          <div>example: {theme.example}</div>
          <br />
        </div>
      ))}
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="phrase">Phrase: </label>
        <input id="phrase" value={form.phrase} onChange={handleFormChange} />
        <label htmlFor="definition"> Definition: </label>
        <input
          id="definition"
          value={form.definition}
          onChange={handleFormChange}
        />
         <label htmlFor="example"> Example: </label>
        <input
          id="example"
          value={form.example}
          onChange={handleFormChange}
        />
        <button type="submit">Add to List</button>
      </form>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="phrase">Select List Item: </label>
        <input id="phrase" value={form.title} onChange={handleFormChange} />
        <button type="submit">Remove List</button>
      </form> */}
    </div>
  )
}

export default PhraseByTheme
