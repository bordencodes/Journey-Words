const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Phrase, Collection } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

//Phrase routes

// read all phrases
app.get('/phrases', async (req, res) => {
  let allPhrases = await Phrase.find({})
  res.json(allPhrases)
})

// create phrases
app.post('/phrases', async (req, res) => {
  let createdPhrase = await Phrase.create(req.body)
  res.json(createPhrase)
})

// add/create collection
app.post('/collection', async (req, res) => {
  let createdCollection = await Collection.create(req.body)
  res.json(createCollection)
})

//update a phrase
app.put('/phrase/:id', async (req, res) => {
  let updatedPhrase = await Phrase.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
})

// update a collection
app.put('/collection/:id', async (req, res) => {
  let updatedCollection = await Collection.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )
})

// delete a phrase
app.delete('/phrase/:id', async (req, res) => {
  let deletedPhrase = await Phrase.findByIdAndDelete(req.params.id)
  res.json(deletedPhrase)
})

// delete a collection
app.delete('/collection/:id', async (req, res) => {
  let deletedCollection = await Collection.findByIdAndDelete(req.params.id)
  res.json(deletedCollection)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
