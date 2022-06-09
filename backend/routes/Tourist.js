const express = require('express') 
const { getTourist, createTourist } = require('../controllers/touristController')
const { TouristVerf } = require('../controllers/touristVerfController')
const router = express.Router()

router.get('/', getTourist)
router.post('/add', createTourist)
router.post('/verf', TouristVerf)

module.exports = router
