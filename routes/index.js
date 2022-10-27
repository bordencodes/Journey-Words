const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/collections', controllers.createCollection)

// router.get('/collections', controllers.getAllCollections)

router.get('/collections/:id', controllers.getCollectionById)

router.put('/collections/:id', controllers.updateCollection)

router.delete('/collections/:id', controllers.deleteCollection)

router.post('/phrases', controllers.createPhrase)

router.get('/phrases', controllers.getAllPhrases)

router.get('/phrases/:id', controllers.getPhraseById)

router.put('/phrases/:id', controllers.updatePhrase)

router.delete('/phrases/:id', controllers.deletePhrase)

module.exports = router
