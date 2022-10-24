const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/collections', controllers.createCollection)

router.post('/collections', controllers.getAllCollections)

router.get('/collections/:id', controllers.getCollectionById)

router.put('/collections/:id', controllers.updateCollection)

router.delete('/collections/:id', controllers.deleteCollection)

module.exports = router
