const Image = require('../models/Images');
const Tour = require('../models/Tour')
const path = require('path')    ;
const fs = require('fs');
const UploadFile=require('../config/Sharp');

exports.createOne = async (req, res, next) => {
    const tour = await Tour.findById(req.body.tourID);
    const files = req.file;
    const {filename} = files;
    const thumb=(`/public/images/landing/${tour.tour_id}~${filename}`)
    // const SharpMetod=new UploadFile(filename)
    //  await  SharpMetod.sharpMetod()
  const result = new Image({
     image:thumb,   
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
                if(data){
                let n = path.join(path.dirname(__dirname)).length;
                const filePath=path.join(path.dirname(__dirname).slice(0,n-7)+data.image);
                // console.log(path.join(path.dirname(__dirname).slice(0,n-7)+data.image))
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
