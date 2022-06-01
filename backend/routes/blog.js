const express = require('express')
const { createOne, getItemByUser, getItem, updateOne, getItems, deleteOne, getItemsUser } = require('../controllers/blogController');
const { protect, bloger, admin } = require('../middleware/auth');
const router = express.Router()

router.post('/add',protect,bloger, createOne)
router.get("/byUser/:id",protect, bloger, getItemByUser);
router.get("/all", protect,admin, getItems);
router.get("/:id",protect,bloger, getItem);
router.put("/:id", protect, bloger, updateOne);
router.delete("/:id", protect, admin, deleteOne);
router.get('/:language/:address',getItemsUser)

module.exports=router