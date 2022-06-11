const express = require('express') 
const { getTourist, createTourist } = require('../controllers/socialTouristController')
const router = express.Router()

router.get('/', getTourist)
router.post('/add', createTourist)

module.exports = router
