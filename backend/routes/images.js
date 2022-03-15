
const express = require('express');
const router = express.Router()
const Image= require('../controllers/imagesController')
const multer = require('multer')
const md5 = require('md5')
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/images/landing');
    },
    filename: function async(req,file,cb) {
        console.log(req.body.tour_id);
        cb(null, `${req.body.tour_id}~${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage: storage});
 
router.post('/add',  upload.single('image'), Image.createOne)
router.get('/all', Image.getAll);
router.get('/byTour/:tourID', Image.get_Image_TourId);
router.get('/:id', Image.getOne);
router.put('/:id',  upload.single('image'), Image.updateOne);
router.delete('/:id',  Image.deleteOne);
module.exports = router

