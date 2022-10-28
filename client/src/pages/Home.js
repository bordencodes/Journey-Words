import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const [collections, updateCollections] = useState([])
  const [form, updateForm] = useState({
    title: '',
    description: ''
  })
  const [remove, removeTheme] = useState('')

  const apiCall = async () => {
    let response = await axios.get('http://localhost:3001/collections')
    updateCollections(response.data)
  }

  useEffect(() => {
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
    apiCall()
    updateForm({
      title: '',
      description: ''
    })
  }

  const deleteList = async (e) => {
    let response = await axios.delete(
      `http://localhost:3001/collections/${remove.deleteList}`
    )
    apiCall()
  }

  const handleListChange = async (e) => {
    removeTheme({ ...remove, [e.target.id]: e.target.value })
  }

  return (
    <div className="App">
      <h2>Select a List</h2>
      {collections.map((collection) => (
        <section key={collection.id}>
          <button
            className="theme-btns"
            id="themes"
            value={collection.title}
            onClick={handleChange}
          >
            {collection.title}
          </button>
        </section>
      ))}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="title">
          Title:{' '}
        </label>
        <input id="title" value={form.title} onChange={handleFormChange} />
        <label className="formLabel" htmlFor="description">
          {' '}
          Description:{' '}
        </label>
        <input
          id="description"
          value={form.description}
          onChange={handleFormChange}
        />
        <button className="homeBtn" type="submit">
          Add to List
        </button>
      </form>
      <br />
      <label className="formLabel" htmlFor="title">
        Select List Item:{' '}
      </label>
      <select
        className="deleteDropdown"
        id="deleteList"
        onChange={handleListChange}
      >
        <option></option>
        {collections.map((collection) => (
          <option value={collection._id}>{collection.title}</option>
        ))}
      </select>
      <button className="homeBtn" type="submit" onClick={deleteList}>
        Remove List
      </button>
    </div>
  )
}

export default Home
