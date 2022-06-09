const Tourist = require("../models/Tourist");

const getTourist = async (req, res) => {
  try {
    const result = await Tourist.findOne({ email: req.query.email }).exec();
    res.status(200).json(result);
  } catch (error) {}
};

const createTourist = async (req, res) => {
  try {
    const tourist = new Tourist({
      name: req.body.name,
      email: req.body.email,
    });
    tourist.save();
    res.status(200).json(tourist);
  } catch (error) {}
};

module.exports = {
  getTourist,
  createTourist,
};
