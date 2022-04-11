const Style = require("../models/Style");
const fs = require("fs");

exports.createOne = async (req, res, next) => {
  const result = new Style({
    tourID: req.body.tourID,
    styles: req.body.styles,
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
  await Style.findOneAndUpdate(
    { tourID: req.params.id },
    { tourID: req.body.tourID, styles: req.body.styles },
    (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    }
  );
};
exports.deleteOne = async (req, res, next) => {
  await Style.remove({ tourID: req.params.id });
  res.status(200).json([]);
};

exports.getItem = async (req, res, next) => {
  const result = await Style.findOne({
    tourID: req.params.id,
  });
  res.status(200).json(result);
};
exports.getItems = async (req, res, next) => {
  const result = await Style.find();
  res.status(200).json(result);
};

exports.globalItems = async (req, res) => {
  fs.readFile("/styles/globals.scss", function (err, data) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    console.log(res);
    return res.end();
  });
};
