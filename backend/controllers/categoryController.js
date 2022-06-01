const Category = require("../models/Category");

exports.createOne = async (req, res) => {
  const result = new Category({
    name: req.body.name,
    russianName: req.body.russianName,
    englishName: req.body.englishName,
    espanolName: req.body.espanolName,
    italiyName: req.body.italiyName,
    frenchName: req.body.frenchName,
    deutschName: req.body.deutschName,
  });
  await result
    .save()
    .then(() => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json({ messade: "Data is not created", data: err });
    });
};
exports.getAll = async (req, res) => {
  const all = await Category.find();
  res.send(all);
};

exports.updateCategory = async (req, res, next) => {
  const category = await Category.findByIdAndUpdate({ _id: req.params.id });
  if (!category) {
    res.status(404).json({ success: false, data: "Auth Not Found" });
  }
    const {
      name,
      russianName,
      englishName,
      espanolName,
      italiyName,
      frenchName,
      deutschName,
    } = req.body;
    category.name = name;
    category.russianName = russianName;
    category.englishName = englishName;
    category.espanolName = espanolName;
    category.italiyName = italiyName;
    category.frenchName = frenchName;
    category.deutschName = deutschName;
  await category
    .save()
    .then(() => {
      res.status(200).json({ success: true, data: category });
    })
    .catch((error) => {
      res.status(400).json({ success: false, error: error });
    });
};

exports.deleteCategory = async (req, res, next) => {
  await Category.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ success: true, data: [] });
};
