const Tour = require('../models/Tour');


exports.createOne = async (req, res, next) => {
    const result = new Tour({
        tourName:req.body.tourName,
        type_id:req.body.type_id,
        language:req.body.language,
        userID:req.body.userID
    })
   await result.save() 
    .then(() => {
        res.status(200).json(result)
    })
    .catch((error) => {
        res.status(400).json({message: "Data is not created", data: error})
    })
}

exports.updateOne = async (req, res, next) => {
    const result = await Tour.findByIdAndUpdate(req.params.id)
        result.tourName=req.body.tourName,
        result.type_id=req.body.type_id,
        result.language=req.body.language,
        result.userID=req.body.userID
    await result.save()
    .then(() => {
        res.status(200).json(result)
    })
    .catch((error) => {
        res.status(400).json({message: "Badly", data: error})
    })
}
exports.deleteOne = async (req, res, next) => {
    await Tour.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json([])
}

exports.getItem = async (req, res,next ) => {
    const result = await Tour.findById(req.params.id)
    res.status(200).json(result)
}
exports.getItems = async (req, res,next ) => {
    const result = await Tour.find()
    res.status(200).json(result)
}