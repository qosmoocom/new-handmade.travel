const express = require("express");
const router = express.Router();
const {
  send_email_more,
} = require("../controllers/send_email_more_controller");

router.post("/", send_email_more);

module.exports = router;
