const Tourist = require("../models/Tourist");
const bcrypt = require("bcryptjs");

const getTourist = async (req, res) => {
  try {
    const result = await Tourist.findOne({ email: req.query.email }).exec();
    res.status(200).json(result);
  } catch (error) {}
};

const createTourist = async (req, res) => {
  const { name, email, password1, phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password1, salt);
  try {
    const tourist = new Tourist({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    tourist.save();
    res.status(200).json(tourist);
  } catch (error) {}
};



const getOneTourist = async (req, res) => {
  const text = 'parol xato'
  try {
    const result = await Tourist.findOne({ email: req.body.email }).exec();
    const matchPassword =await bcrypt.compare(req.body.password, result.password)
    if(matchPassword){
      res.status(200).json(result);
    }else{res.status(202).send(text)}
  } catch (error) {}
};


module.exports = {
  getTourist,
  createTourist,
  getOneTourist
};