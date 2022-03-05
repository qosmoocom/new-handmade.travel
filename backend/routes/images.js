const express = require('express')
const router = express.Router()
const {createOne , deleteOne} = require('../controllers/imagesController')
const multer = require('multer');
const md5 = require('md5');
const path = require('path');
const Tour = require('../models/Tour')
const { protect, admin, moderator } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/images/landing');
    },
    filename: function async(req,file,cb) {
        // const tour = Tour.find({_id:req.body.tourID})
        console.log("salom  ",file);
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});



router.post('/add', upload.single('image'), createOne);
router.delete('/:id',  deleteOne)

module.exports = router;

