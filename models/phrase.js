const { Schema } = require('mongoose')

const phraseSchema = new Schema(
  {
    theme: { type: [], required: true },
    phrase: { type: String, required: true },
    definition: { type: String, required: true },
    example: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = phraseSchema
