const Blog = require('../models/Blog')

exports.createOne = async (req, res) => {
    const result = new Blog({
      blogName: req.body.blogName,
      category: req.body.category,
      blogTexts: req.body.blogTexts,
      blogAuthor: req.body.blogAuthor,
      date: req.body.date,
      address: req.body.address,
      language: req.body.language,
    });
    await result.save().then(() => {
        res.status(200).json(result)
    })
        .catch((err) => {
        res.status(400).json({messade:'Data is not created',data:err})
    })
}
exports.getItemByUser = async (res, req) => {
    const result = await Blog.find({ blogAuthor: req.req.params.id });
    res.res.status(200).json(result);
}

exports.getItems = async (req, res, next) => {
  const result = await Blog.find();
  res.status(200).json(result);
};

exports.getItemsHome = async (req, res, next) => {
  const result = await Blog.find();
  res.status(200).json(result);
};

exports.deleteOne = async (req, res, next) => {
  await Blog.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json([]);
};


exports.getItem = async (req, res, next) => {
    const result = await Blog.find({ address: req.params.id });
  res.status(200).json(result);
};
exports.updateOne = async (req, res, next) => {
    const result = await Blog.findByIdAndUpdate(req.params.id);
    (result.blogName = req.body.blogName),
      (result.language = req.body.language),
      (result.blogTexts = req.body.blogTexts),
      (result.blogAuthor = req.body.blogAuthor),
      (result.isItActive = req.body.isItActive),
      await result
        .save()
        .then(() => {
          res.status(200).json(result);
        })
        .catch((error) => {
          res.status(400).json({ message: "Badly", data: error });
        });
}

exports.getItemsUser = async (req, res, next) => {
  try {
    const result = await Blog.find({
      isItActive: "published",
      address: req.params.address,
      language: req.params.language,
    });
    res.status(200).json(result);
  } catch (error) {}
};