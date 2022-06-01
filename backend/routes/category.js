const express = require('express')
const { createOne, getAll, updateCategory, deleteCategory } = require('../controllers/categoryController')
const { protect, admin } = require('../middleware/auth')
const router = express.Router()

router.post('/',protect,admin, createOne)
router.get('/all',getAll)
router.put("/:id",protect,admin, updateCategory);
router.delete("/:id",protect,admin, deleteCategory);

module.exports=router