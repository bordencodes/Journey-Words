const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const routes = require('./routes')
const { Phrase, Collection } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

//Phrase and Collection routes

// read all phrases
app.get('/phrases', async (req, res) => {
  let allPhrases = await Phrase.find({})
  res.json(allPhrases)
})

app.get('/themes/:id', async (req, res) => {
  let phrasesByTheme = await Phrase.find({ theme: [req.params.id] })
  res.json(phrasesByTheme)
})

// read one phrase
app.get('/phrases/:id', async (req, res) => {
  let findPhrase = await Phrase.findById(req.params.id).populate('collections')
  res.json(findPhrase)
})

// read one collection
app.get('/collections/:id', async (req, res) => {
  let findCollection = await Collection.findById(req.params.id)
  res.json(findCollection)
})

// read all collections
app.get('/collections', async (req, res) => {
  let allCollections = await Collection.find({})
  res.json(allCollections)
})

// create phrases
app.post('/phrases', async (req, res) => {
  let createdPhrase = await Phrase.create(req.body)
  res.json(createdPhrase)
})
// create collections
app.post('/collections', async (req, res) => {
  let createdCollection = await Collection.create(req.body)
  res.json(createdCollection)
})

// update a phrase
app.put('/phrases/:id', async (req, res) => {
  let updatedPhrase = await Phrase.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedPhrase)
})

// update a collection
app.put('/collections/:id', async (req, res) => {
  let updatedCollection = await Collection.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )
  res.json(updatedCollection)
})

// delete a phrase
app.delete('/phrases/:id', async (req, res) => {
  let deletedPhrase = await Phrase.findByIdAndDelete(req.params.id)
  res.json(deletedPhrase)
})

// delete a collection
app.delete('/collections/:id', async (req, res) => {
  let deletedCollection = await Collection.findByIdAndDelete(req.params.id)
  res.json(deletedCollection)
})

app.use('/api', routes)

// db.on('error', cosole.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
