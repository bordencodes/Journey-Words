import './App.css'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { response } from 'express'

function App() {
  // const [collections, updateCollections] = useState([])
  // const [formState, setFormState] = useState({
  //   title: '',
  //   description: '',
  //   phrase: []
  // })

  // useEffect(() => {
  //   const apiCall = async () => {
  //     let response = await axios.get('http://localhost:3001/collections')
  //     updateCollections(response.data)
  //   }
  //   apiCall()
  // }, [])

  // const handleChange = (event) => {
  //   setFormState({ ...formState, [event.target.id]: event.target.value })
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   let newCollection = await axios
  //     .post('http://localhost:3001/collections', formState)
  //     .then((response) => {
  //       return response
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })

  //   updateCollections([...collections, newCollection.data])
  //   setFormState({ title: '', description: '', phrase: [] })
  // }

  return (
    <div className="App">
      <h1>Journey Words</h1>
      <div>
        {/* <h2>{collection.title}</h2> */}
        <h2>Vocab Lists</h2>
      </div>
      <h3>Add another collection:</h3>
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
          // value={formState.price}
          // onChange={handleChange}
        />
        <button type="submit">Add collection</button>
      </form>
    </div>
  )
}

export default App
