import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VocabCollections = () => {
  let navigate = useNavigate()

  const [collections, updateCollections] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/collections')
      updateCollections(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>Journey Words</h1>
      {collections.map((collection) => (
        <section key={collection.id}>
          <div>{collection.title}</div>
        </section>
      ))}
    </div>
  )
}

export default VocabCollections
