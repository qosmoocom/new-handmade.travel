const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(require("morgan")("dev"));

app.get('/',(req,res)=>{
    res.send('salom')
})
app.use('/api/user', require('./routes/user'));

app.listen(5000, console.log("Listening on port 5000"));
