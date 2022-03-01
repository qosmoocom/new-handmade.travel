const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(require("morgan")("dev"));


app.listen(5000, console.log("Listening on port 5000"));
