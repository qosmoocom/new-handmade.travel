const express = require("express");
const router = express.Router();
const { globalItems } = require("../controllers/globalcssController");

router.get("/get", globalItems);

module.exports = router;
