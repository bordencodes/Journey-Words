import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const [collections, updateCollections] = useState([])
  const [themes, setThemes] = useState()
  const [form, updateForm] = useState({
    title: '',
    description: '',
    phrases: []
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/collections')
      updateCollections(response.data)
    }
    apiCall()
  }, [])

  const handleChange = async (e) => {
    navigate(`/themes/${e.target.value}`)
  }

  return (
    <div className="App">
      <h3>Select a List</h3>
      {collections.map((collection) => (
        <section key={collection.id}>
          <button id="themes" value={collection.title} onClick={handleChange}>
            {collection.title}
          </button>
        </section>
      ))}
      <form>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          // value={formState.title}
          // onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          // value={formState.description}
          // onChange={handleChange}
        />
        <label htmlFor="phrase">Phrase:</label>
        <input
          type="phrase"
          // value={formState.phrase}
          // onChange={handleChange}
        />
        <button type="submit">Add to List</button>
      </form>
    </div>
  )
}

export default Home
