const SocialTourist = require("../models/socialTourist");
const bcrypt = require("bcryptjs");

const getTourist = async (req, res) => {
  try {
    const result = await SocialTourist.findOne({ email: req.query.email }).exec();
    res.status(200).json(result);
  } catch (error) {}
};

const createTourist = async (req, res) => {
  const { name, email } = req.body;
  try {
    const tourist = new SocialTourist({
      name,
      email,
      password:'',
      phone:'',
    });
    tourist.save();
    res.status(200).json(tourist);
  } catch (error) {}
};






module.exports = {
  getTourist,
  createTourist,
};
