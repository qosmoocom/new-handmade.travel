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

connectDB();

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use("/public/images", express.static(pathdir));
  server.use(cors());
  server.use(require("morgan")("dev"));

  server.use("/api/user", require("./routes/user"));
  server.use("/api/tour", require("./routes/tour"));
  server.use("/api/style", require("./routes/style"));
  server.use("/api/images", require("./routes/images"));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
  });
});
