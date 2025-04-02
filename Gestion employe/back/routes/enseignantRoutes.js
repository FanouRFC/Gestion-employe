const express = require('express')
const router = express.Router()
const enseignantController = require('../controllers/enseignantController')

router.post('/new', enseignantController.createEnseignant)

module.exports = router
