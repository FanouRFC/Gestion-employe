const express = require('express')
const router = express.Router()
const enseignantController = require('../controllers/enseignantController')

router.post('/new', enseignantController.createEnseignant)
router.get('/all', enseignantController.gellAllEnseignant)
router.delete('/delete/:numens', enseignantController.deleteOneEnseignant)

module.exports = router
