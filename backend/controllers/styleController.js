const Style = require('../models/Style');


exports.createOne = async (req, res, next) => {
    const result = new Style({
        tourID:req.body.tourID,
        styles:req.body.styles
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
    const result = await Style.findByIdAndUpdate(req.params.id)
        result.tourID=req.body.tourID,
        result.styles=req.body.styles
    await result.save()
    .then(() => {
        res.status(200).json(result)
    })
    .catch((error) => {
        res.status(400).json({message: "Badly", data: error})
    })
}
exports.deleteOne = async (req, res, next) => {
    await Style.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json([])
}

exports.getItem = async (req, res,next ) => {
    const result = await Style.findById(req.params.id)
    res.status(200).json(result)
}
exports.getItems = async (req, res,next ) => {
    const result = await Style.find()
    res.status(200).json(result)
}