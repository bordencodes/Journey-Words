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
      <h1>Vocab Lists</h1>
    </div>
  )
}

export default App
