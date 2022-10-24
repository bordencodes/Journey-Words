const Collection = require('../models/collection')

const createCollection = async (req, res) => {
  try {
    const collection = await new Collection(req.body)
    await collection.save()
    return res.status(201).json({ collection })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find()
    return res.status(200).json({ collections })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getCollectionById = async (req, res) => {
  try {
    const { id } = req.params
    const collection = await Collection.findById(id)
    if (collection) {
      return res.status(200).json({ collection })
    }
    return res.status(404).send('This specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateCollection = async (req, res) => {
  try {
    const collection = await Collection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(collection)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Collection.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Collection deleted')
    }
    throw new Error('Collection not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCollection,
  getAllCollections,
  getCollectionById,
  updateCollection,
  deleteCollection
}
