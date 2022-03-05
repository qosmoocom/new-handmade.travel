const express = require("express");
const router = express.Router();
const {
  register,
  login,
  updateUser,
  getMe,
  deleteUSer,
  getAll,
} = require("../controllers/userController");
const { protect, admin, moderator } = require('../middleware/auth');

router.post("/",protect, admin, register);
router.post("/login", login);
router.get("/me", getMe);
router.get("/all", protect,admin, getAll);
router.delete("/:id",protect, admin, deleteUSer);
router.put("/:id", protect, admin, updateUser);

module.exports = router;
