// const Image = require('../models/Images');
// const Tour = require('../models/Tour')
// const path = require('path')    ;
// const fs = require('fs');
// const UploadFile=require('../config/Sharp');

// exports.createOne = async (req, res, next) => {
//     const tour = await Tour.findById(req.body.tourID);
//     const files = req.file;
//     const {filename} = files;
//     const thumb=(`/public/images/landing/${tour.tour_id}~${filename}`)
//     // const SharpMetod=new UploadFile(filename)
//     //  await  SharpMetod.sharpMetod()
//   const result = new Image({
//     image:`/public/images/landing/${tour.tour_id}~${req.file.filename}`,   
//     tourID:req.body.tourID,
//     tourAuthor:req.body.tourAuthor
//   })
//   await result.save()
//   .then(() => {res.status(201).json({ success: true, data: result})})
//   .catch((error) => {res.status(400).json({ success: false, error: error })})

// }


// exports.deleteOne=async (req,res)=>{
//     await Image.findById(req.params.id)
//         .exec((error,data)=>{
//             if(error){res.send(error)}
//             else{
//                 console.log(data);
//                 if(data){
//                 let n = path.join(path.dirname(__dirname)).length;
//                 const filePath=path.join(path.dirname(__dirname).slice(0,n-7)+data.image);
//                 // console.log(path.join(path.dirname(__dirname).slice(0,n-7)+data.image))
//                 fs.unlink(filePath, async (err)=>{
//                     if(err) throw err
//                     await Image.findByIdAndDelete(req.params.id)
//                     res.status(200).json({
//                         success:true,
//                         data:"Success delete"
//                     })
//                 })
//             }else{
//                 res.send('Image not found');
//             }
//         }
//         })
// }


const Image = require('../models/Images');
const md5 = require('md5');
const path = require('path')
const fs = require('fs')
const sharp = require('sharp');

exports.createOne = async (req, res, next) => {
    //     const tour = await Tour.findById(req.body.tourID);
//     const files = req.file;
//     const {filename} = files;
//     const thumb=(`/public/images/landing/${tour.tour_id}~${filename}`)
    let compressedFile = path.join(__dirname, '../public/images/landing', md5(new Date().getTime()) + '.jpg')
    await sharp(req.file.path) // req.file.path - bu original rasm
      .resize(875, 435)
      .jpeg({ quality: 100 })
      .toFile(compressedFile, (error) => {
       if (error) {
        res.send(error)
       }
        // origininal rasmni ochirib yuboradi
       fs.unlink(req.file.path, async (error) => {
        if (error) {
         res.send(error)
        }
       })
      })

    const result = new Image({
        image: path.basename(compressedFile),
        tourID:req.body.tourID,
        tourAuthor:req.body.tourAuthor
    })
    await result.save()
    .then(() => {
        res.status(201).json({ success: true, data: result });
    })
    .catch((error) => {
        res.status(400).json({message: "Data is not created", data: error})
    })
}

exports.updateOne = async (req, res, next) => {

    await Image.findById({ _id: req.params.id })
    .exec((error, data) => {
        if (error) {
            res.status(404).json({ success: false, error: error })
        } else {
            let filePath = path.join(__dirname, `../public/images/landing/${data.image}`)
                fs.unlink(filePath, async (error) => {
                     if (error) {
                        throw error
                    }
                })
            }
    })
    let compressedFile = path.join(__dirname, '../public/images/landing', md5(new Date().getTime()) + '.jpg')
    await sharp(req.file.path) // req.file.path - bu original rasm
      .resize(875, 435)
      .jpeg({ quality: 100 })
      .toFile(compressedFile, (error) => {
       if (error) {
        res.send(error)
       }
        // origininal rasmni ochirib yuboradi
       fs.unlink(req.file.path, async (error) => {
        if (error) {
         res.send(error)
        }
       })
      })


    const result = await Image.findByIdAndUpdate(req.params.id)
    result.image = path.basename(compressedFile) 
    result.save()
    .then(() => {
        res.redirect('/api/Image/all')
    })
    .catch((error) => {
        res.status(400).json({message: "Badly", data: error})
    })
}
exports.deleteOne = async (req, res, next) => {
    await Image.findById({ _id: req.params.id })
        .exec(async (error, data) => {
         if (error) {
          throw error
         } else {
          let filePath = path.join(__dirname, `../public/images/landing/${data.image}`)
          fs.unlink(filePath, async (error) => {
           if (error) {
            throw error
           }
          })
          await Image.findByIdAndDelete({ _id: req.params.id })
          res.redirect('/api/Image/all')
         }
        })
}
exports.getOne = async (req, res,next ) => {
    const result = await Image.findById(req.params.id)
    const user = req.session.admin; // admin session
    res.render("./admin/Image/update", { layout: "./admin_layout", user, result});
}
exports.getAll = async (req, res,next ) => {
    const result = await Image.find()
    const user = req.session.admin; // admin session
    res.render("./admin/Image/index", { layout: "./admin_layout", user, result});
}


exports.get_Image_CLIENT = async (req, res,next ) => {
    const result = await Image.find()
    res.json(result)
}
