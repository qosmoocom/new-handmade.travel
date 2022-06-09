const Image = require('../models/Images')


const createOne = async (req, res, next) => {
  console.log(req);
  let result
  try {
    if (req.files.length == 3) {
      result = {
        image1: `/public/images/blogs/${req.body.blogName}/${req.files[0].filename}`,
        image2: `/public/images/blogs/${req.body.blogName}/${req.files[1].filename}`,
        image3: `/public/images/blogs/${req.body.blogName}/${req.files[2].filename}`,
        blogName: req.body.blogName,
      };
      
    }else if (req.files.length == 2) {
      result = {
        image1: `/public/images/blogs/${req.body.blogName}/${req.files[0].filename}`,
        image2: `/public/images/blogs/${req.body.blogName}/${req.files[1].filename}`,
        blogName: req.body.blogName,
      };
    } else {
      result = {
        image1: `/public/images/blogs/${req.body.blogName}/${req.files[0].filename}`,
        blogName: req.body.blogName,
      };
    }
    console.log(result);
    // await result.save()
    res.send({ data: result });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, err: error, message: error.message });
    //.json({ success: false, err: 'Anvar', message: 'Шахоб' });
  }
};


module.exports={createOne}
