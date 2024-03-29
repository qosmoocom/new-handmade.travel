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

  // to google register
  server.all("/api/auth/signin/google", (req, res) => {
    return handle(req, res);
  });
  server.all("/api/auth/signout", (req, res) => {
    return handle(req, res);
  });

  // to facebook registr
  server.all("/api/auth/signin/facebook", (req, res) => {
    return handle(req, res);
  });

  server.use(express.json({limit: "10mb", extended: true}))
  server.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

  server.use("/public/images", express.static(pathdir));
  server.use(cors());
  server.use(require("morgan")("dev"));

  server.use("/api/user", require("./routes/user"));
  server.use("/api/tour", require("./routes/tour"));
  server.use("/api/blog", require("./routes/blog"));
  server.use("/api/category", require("./routes/category"));
  server.use("/api/style", require("./routes/style"));
  server.use("/api/images", require("./routes/images"));
  server.use("/api/blogImages", require("./routes/blogImages"));
  server.use("/api/global", require("./routes/globalcssRouter"));

  // modal apis
  server.use("/api/action_bron", require("./routes/sendBronEmail"));
  server.use("/api/action_more", require("./routes/sendMoreEmail"));
  server.use("/api/action_phone", require("./routes/sendPhoneEmail"));
  server.use("/api/action_lid", require("./routes/sendLidMagnit"));

  // tourist
  server.use('/api/tourist',require("./routes/Tourist"))
  server.use('/api/social_tourist',require("./routes/socialTourist"))

  // server.use("/api/collections", require("./routes/sendCollection"))

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
  });
});
