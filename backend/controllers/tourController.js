const Tour = require("../models/Tour");

exports.createOne = async (req, res, next) => {
  const result = new Tour({
    tourName: req.body.tourName,
    tour_id: req.body.tour_id,
    language: req.body.language,
    tourTexts: req.body.tourTexts,
    tourStyles: req.body.tourStyles,
    tourAuthor: req.body.tourAuthor,
  });
  await result
    .save()
    .then(() => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json({ message: "Data is not created", data: error });
    });
};

exports.updateOne = async (req, res, next) => {
  const result = await Tour.findByIdAndUpdate(req.params.id);
  (result.tourName = req.body.tourName),
    (result.tour_id = req.body.tour_id),
    (result.language = req.body.language),
    (result.tourTexts = req.body.tourTexts),
    (result.tourStyles = req.body.tourStyles),
    (result.tourAuthor = req.body.tourAuthor),
    (result.isItActive = req.body.isItActive),
    await result
      .save()
      .then(() => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: "Badly", data: error });
      });
};
exports.deleteOne = async (req, res, next) => {
  await Tour.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json([]);
};

exports.getItem = async (req, res, next) => {
  const result = await Tour.findById(req.params.id);
  res.status(200).json(result);
};
exports.getItemByUser = async (req, res, next) => {
  const result = await Tour.find({ tourAuthor: req.params.userID });
  res.status(200).json(result);
};
exports.getItems = async (req, res, next) => {
  const result = await Tour.find();
  res.status(200).json(result);
};

exports.getItemsUser = async (req, res, next) => {
  const result = await Tour.find({ isItActive: true });
  res.status(200).json(result);
};
