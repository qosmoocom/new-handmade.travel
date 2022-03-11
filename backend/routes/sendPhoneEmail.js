const express = require("express");
const router = express.Router();
const {
  send_phone_email,
} = require("../controllers/send_email_phone_controller");

router.post("/", send_phone_email);

module.exports = router;
