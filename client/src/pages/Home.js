import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const [collections, updateCollections] = useState([])
  const [themes, setThemes] = useState()
  const [form, updateForm] = useState({
    title: '',
    description: ''
  })
  const [remove, removeTheme] = useState('')

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

  const handleFormChange = async (e) => {
    updateForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.post('http://localhost:3001/collections', form)
  }

  const deleteList = async (e) => {
    let response = await axios.delete(
      `http://localhost:3001/collections/${remove.deleteList}`
    )
    console.log(response)
  }

  const handleListChange = async (e) => {
    removeTheme({ ...remove, [e.target.id]: e.target.value })
    console.log(remove.deleteList)
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
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input id="title" value={form.title} onChange={handleFormChange} />
        <label htmlFor="description"> Description: </label>
        <input
          id="description"
          value={form.description}
          onChange={handleFormChange}
        />
        <button type="submit">Add to List</button>
      </form>
      <br />
      <label htmlFor="title">Select List Item: </label>
      <select id="deleteList" onChange={handleListChange}>
        <option></option>
        {collections.map((collection) => (
          <option value={collection._id}>{collection.title}</option>
        ))}
      </select>
      <button type="submit" onClick={deleteList}>
        Remove List
      </button>
    </div>
  )
}

export default Home
