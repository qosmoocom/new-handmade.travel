const express = require("express");
const send_collection_email = require("../controllers/send_collections_controller");
const router = express.Router();

router.get("/", send_collection_email);

module.exports = router;
