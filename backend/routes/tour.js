const express = require('express');
const router = express.Router()
const {createOne, getItem, getItems, updateOne, deleteOne} = require('../controllers/tourController')
const { protect, admin, moderator } = require('../middleware/auth');

router.post('/add', protect,moderator, createOne)
router.get('/all',protect, admin ,getItems)
router.get('/:id',protect, admin, moderator ,getItem)
router.put('/:id',protect, admin, moderator ,updateOne)
router.delete('/:id',protect, admin,deleteOne);


module.exports = router 