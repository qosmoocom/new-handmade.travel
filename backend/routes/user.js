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
// const { protect, authorize } = require('../middleware/auth');

router.post("/", register);
router.post("/login", login);
router.get("/me", getMe);
router.get("/all", getAll);
router.delete("/:id", deleteUSer);
router.put("/:id", updateUser);

module.exports = router;
