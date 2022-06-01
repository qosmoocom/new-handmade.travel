const express = require("express");
const router = express.Router();
const Image = require("../controllers/imagesController");
const multer = require("multer");
const md5 = require("md5");
const path = require("path");
const fs = require("fs");
const { createOne } = require("../controllers/blogImageController");

const getAllDirFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllDirFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(file);
    }
  });

  return arrayOfFiles;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      if (fs.existsSync(`./public/images/blogs/${req.body.blogName}`)) {
        if (fs.existsSync(`./public/images/blogs/${req.body.blogName}`)) {
          cb(null, `./public/images/blogs/${req.body.blogName}`);
        } else {
          fs.mkdirSync(`./public/images/blogs/${req.body.blogName}`);
          cb(null, `./public/images/blogs/${req.body.blogName}`);
        }
      } else {
        fs.mkdirSync(`./public/images/blogs/${req.body.blogName}`);
        if (fs.existsSync(`./public/images/blogs/${req.body.blogName}`)) {
          cb(null, `./public/images/blogs/${req.body.blogName}`);
        } else {
          fs.mkdirSync(`./public/images/blogs/${req.body.blogName}`);
          cb(null, `./public/images/blogs/${req.body.blogName}`);
        }
      }
    } catch (err) {
      console.error('rror:',err);
    }
  },
  filename: function async(req, file, cb) {
    // papka ichida nechta fayl bor ekanligi
    let volume = getAllDirFiles(
      require("path").resolve(
        __dirname,
        "../",
        "../",
        "public",
        "images",
        "blogs",
        req.body.blogName,
      )
    ).length;
        console.log(file);
    cb(
      null,
      // `${req.body.tour_id}~${md5(Date.now())}${path.extname(file.originalname)}`
      `${path.basename(file.originalname,'.webp')}${volume + 1}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// , limits: { fileSize: 102400 }

router.post("/add", upload.array("image",3), createOne);
// router.get("/all", Image.getAll);
// router.get("/byTour/:tourID", Image.get_Image_TourId);
// router.get("/:id", Image.getOne);
// router.put("/:id", upload.single("image"), Image.updateOne);
// router.delete("/:id", Image.deleteOne);
module.exports = router;
