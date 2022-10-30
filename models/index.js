const mongoose = require('mongoose')
const phraseSchema = require('./phrase')
const collectionSchema = require('./collection')

const Phrase = mongoose.model('Phrase', phraseSchema)
const Collection = mongoose.model('Collection', collectionSchema)

module.exports = {
  Phrase,
  Collection
}
