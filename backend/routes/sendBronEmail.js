const express = require("express");
const router = express.Router();
const { send_Email } = require("../controllers/sendEmailController");

router.post("/", send_Email);

module.exports = router;
