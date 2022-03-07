const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path").join(__dirname, "/public/images");
const app = express();

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public/images", express.static(path));
app.use(cors());
app.use(require("morgan")("dev"));


app.use('/api/user', require('./routes/user'));
app.use('/api/tour', require('./routes/tour'));
app.use('/api/style', require('./routes/style'));
app.use('/api/images', require('./routes/images'));

app.listen(5000, console.log("Listening on port 5000"));
