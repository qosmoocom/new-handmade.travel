const express = require('express') 
const { getTourist, createTourist, getOneTourist } = require('../controllers/touristController')
const { TouristVerf } = require('../controllers/touristVerfController')
const router = express.Router()

router.get('/', getTourist)
router.post('/add', createTourist)
router.post('/verf', TouristVerf)
router.post('/get', getOneTourist)

module.exports = router
