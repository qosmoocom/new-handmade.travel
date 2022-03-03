const Text = require('../models/Texts');


exports.createOne = async (req, res, next) => {
    const result = new Text({
        textes:req.body.textes,
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
    const result = await Text.findByIdAndUpdate(req.params.id)
        result.textes=req.body.textes,
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
    await Text.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json([])
}

exports.getItem = async (req, res,next ) => {
    const result = await Text.findById(req.params.id)
    res.status(200).json(result)
}
exports.getItems = async (req, res,next ) => {
    const result = await Text.find()
    res.status(200).json(result)
}