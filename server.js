const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const routes = require('./routes')
const { Phrase, Collection } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/phrases', async (req, res) => {
  let allPhrases = await Phrase.find({})
  res.json(allPhrases)
})

app.get('/themes/:id', async (req, res) => {
  let phrasesByTheme = await Phrase.find({ theme: [req.params.id] })
  res.json(phrasesByTheme)
})

app.get('/phrases/:id', async (req, res) => {
  let findPhrase = await Phrase.findById(req.params.id).populate('collections')
  res.json(findPhrase)
})

app.get('/collections/:id', async (req, res) => {
  let findCollection = await Collection.findById(req.params.id)
  res.json(findCollection)
})

app.get('/collections', async (req, res) => {
  let allCollections = await Collection.find({})
  res.json(allCollections)
})

app.post('/phrases', async (req, res) => {
  let createdPhrase = await Phrase.create(req.body)
  res.json(createdPhrase)
})

app.post('/collections', async (req, res) => {
  let createdCollection = await Collection.create(req.body)
  res.json(createdCollection)
})

app.put('/phrases/:id', async (req, res) => {
  let updatedPhrase = await Phrase.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedPhrase)
})

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

app.delete('/phrases/:id', async (req, res) => {
  let deletedPhrase = await Phrase.findByIdAndDelete(req.params.id)
  res.json(deletedPhrase)
})

app.delete('/collections/:id', async (req, res) => {
  let deletedCollection = await Collection.findByIdAndDelete(req.params.id)
  res.json(deletedCollection)
})

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
