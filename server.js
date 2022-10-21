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

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
