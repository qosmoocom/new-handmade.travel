// const express = require("express");
// const connectDB = require("./config/db");
// const cors = require("cors");
// const path = require('path');
// const pathdir = require('path').join(__dirname, '/public/images')

// const app = express();

// connectDB();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/public/images", express.static(pathdir));
// app.use(cors());
// app.use(require("morgan")("dev"));

// app.use('/api/user', require('./routes/user'));
// app.use('/api/tour', require('./routes/tour'));
// app.use('/api/style', require('./routes/style'));
// app.use('/api/images', require('./routes/images'));

// app.listen(5000, console.log("Listening on port 5000"));

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const pathdir = require("path").join(__dirname, "/public/images");
const next = require("next");
const fs = require("fs");

connectDB();

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();

  server.use(express.json({ limit: "25mb" }));
  server.use(express.urlencoded({ extended: true, limit: "25mb" }));
  server.use("/public/images", express.static(pathdir));
  server.use(cors());
  server.use(require("morgan")("dev"));

  server.use("/api/user", require("./routes/user"));
  server.use("/api/tour", require("./routes/tour"));
  server.use("/api/style", require("./routes/style"));
  server.use("/api/images", require("./routes/images"));

  server.use("/api/global", require("./routes/globalcssRouter"));

  // modal apis
  server.use("/api/action_bron", require("./routes/sendBronEmail"));
  server.use("/api/action_more", require("./routes/sendMoreEmail"));
  server.use("/api/action_phone", require("./routes/sendPhoneEmail"));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // fs.readFile("styles/globals.scss", function (err, data) {
  //   // res.writeHead(200, { "Content-Type": "text/html" });
  //   console.log(err);
  //   console.log("data is : ", data);
  //   // res.write(data);
  //   // console.log("res is : ", res);
  //   // return res.end();
  // });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
  });
});
