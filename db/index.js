const mongoose = require('mongoose')
require('dotenv').config()

let MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vocabListsDatabase'

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MonoDB')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection

module.exports = db
