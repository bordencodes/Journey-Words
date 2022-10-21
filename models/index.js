const mongoose = require('mongoose')
const phraseSchema = require('./Phrase')
const collectionSchema = require('./Collection')

const Phrase = mongoose.model('Phrase', phraseSchema)
const Collection = mongoose.model('Collection', collectionSchema)

module.exports = {
  Phrase,
  Collection
}
