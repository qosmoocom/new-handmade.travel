const express = require("express");
const router = express.Router();
const {send_lid_magnit,} = require("../controllers/send_email_lid_magnit");

router.post("/", send_lid_magnit);

module.exports = router;
