const Image = require('../models/Images');
const Tour = require('../models/Tour')
const path = require('path')    ;
const fs = require('fs');

exports.createOne = async (req, res, next) => {
    const tour = Tour.findById(req.body.tourID)
  const result = new Image({
     image:`/public/images/landing/${tour.tour_id}/${req.file.filename}`,
    tourID:req.body.tourID,
    tourAuthor:req.body.tourAuthor
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
                const filePath=path.join(path.dirname(__dirname)+data.image)
                console.log(path.join(path.dirname(__dirname).slice()))
                fs.unlink(filePath, async (err)=>{
                    if(err) throw err
                    await Image.findByIdAndDelete(req.params.id)
                    res.status(200).json({
                        success:true,
                        data:"Success delete"
                    })
                })
            }
        })
}
