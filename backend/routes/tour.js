const express = require("express");
const router = express.Router();
const {
  createOne,
  getItem,
  getItems,
  updateOne,
  deleteOne,
  getItemByUser,
} = require("../controllers/tourController");
const { protect, admin, moderator } = require("../middleware/auth");

router.post("/add", protect, moderator, createOne);
router.get("/all", protect, admin, getItems);
router.get("/:id", protect, admin, moderator, getItem);
router.put("/:id", protect, moderator, updateOne);
router.get("/byUser/:userID", protect, moderator, getItemByUser);
router.delete("/:id", protect, admin, deleteOne);

module.exports = router;
