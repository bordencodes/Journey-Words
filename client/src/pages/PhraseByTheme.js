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
      <div className="phraseWrapper">
        {phraseTheme.map((theme) => (
          <div className="themesContainer">
            <div className="topWord">{theme.phrase}</div>
            <div>Definition: {theme.definition}</div>
            <div>example: {theme.example}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhraseByTheme
