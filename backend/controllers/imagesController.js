const Image = require('../models/Images');
const Tour = require('../models/Tour')
const path = require('path')    ;
const fs = require('fs');
const UploadFile=require('../config/Sharp');

exports.createOne = async (req, res, next) => {
  const result = new Image({
    image:`/public/images/landing/${req.file.filename}`,   
    tourID:req.body.tourID,
    tourAuthor:req.body.tourAuthor,
    tour_id:req.body.tour_id
  })
  await result.save()
  .then(() => {res.status(201).json({ success: true, data: result})})
  .catch((error) => {res.status(400).json({ success: false, error: error })})
}


exports.deleteOne=async (req,res)=>{
    await Image.findById(req.params.id)
        .exec((error,data)=>{
            if(error){res.send(error)}
            else{
                console.log(data);
                if(data){
                let n = path.join(path.dirname(__dirname)).length;
                const filePath=path.join(path.dirname(__dirname).slice(0,n-7)+data.image);
                fs.unlink(filePath, async (err)=>{
                    if(err) throw err
                    await Image.findByIdAndDelete(req.params.id)
                    res.status(200).json({
                        success:true,
                        data:"Success delete"
                    })
                })
            }else{
                res.send('Image not found');
            }
        }
        })
}

exports.updateOne = async (req, res, next) => {

    await Image.findById({ _id: req.params.id })
    .exec((error, data) => {
        if (error) {
            res.status(404).json({ success: false, error: error })
        } else {
            let n = path.join(path.dirname(__dirname)).length;
            const filePath=path.join(path.dirname(__dirname).slice(0,n-7)+data.image);
                fs.unlink(filePath, async (error) => {
                     if (error) {
                        throw error
                    }
                })
            }
    })
    const result = await Image.findByIdAndUpdate(req.params.id)
    result.image = `/public/images/landing/${req.file.filename}`,
    result.tourID = req.body.tourID,
    result.tourAuthor = req.body.tourAuthor,
    result.tour_id = req.body.tour_id
    result.save()
    .then(() => {
        res.status(200).json('Successufly updated')
    })
    .catch((error) => {
        res.status(400).json({message: "Badly", data: error})
    })
}

exports.getOne = async (req, res,next ) => {
    const result = await Image.findById(req.params.id)
    res.status(200).json(result)
}
exports.getAll = async (req, res,next ) => {
    const result = await Image.find()
    res.status(200).json(result)
}


exports.get_Image_TourId = async (req, res,next ) => {
    const result = await Image.find({tourID:req.params.tourID})
    res.json(result)
}
