const express = require('express');
const router = express.Router();
const {
  createOne,
  getItem,
  getItems,
  updateOne,
  deleteOne,
  getItemByUser,
  getItemsUser,
  getItemHome,
} = require('../controllers/tourController');
const {
  protect,
  admin,
  moderator,
  moderatorAll,
  adminModerator,
} = require('../middleware/auth');

router.post('/add', protect, moderator, createOne);
router.get('/all', protect, admin, getItems);
router.get('/home',getItemHome);
router.get('/all/clon', protect, moderatorAll, getItems);
router.get('/:id', protect, moderator, getItem);
router.put('/:id', protect, moderator, updateOne);
router.get('/byUser/:id', protect, moderator, getItemByUser);
router.delete('/:id', protect, admin, deleteOne);
router.get('/:tour_id/:id', getItemsUser);


module.exports = router;
