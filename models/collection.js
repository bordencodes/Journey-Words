const { Schema } = require('mongoose')

const collectionSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    phrases: [{ type: Schema.Types.ObjectId, ref: 'Phrase' }]
  },
  { timestamps: true }
)

module.exports = collectionSchema
