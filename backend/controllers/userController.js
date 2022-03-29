const User = require("../models/User");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    });
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Something error creating user",
    });
  }
};

exports.login = async (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(400)
      .json({ success: false, data: "Please provide username and password" });
  }

  const user = await User.findOne({ username: username }).select(["+password"]);
  
  // if (username == 'Jasur' && password=='Jasur') {
  //   let payload = { subject: user._id };
  //   let token = jwt.sign(payload, config.JWT_SECRET);
  //   res.status(200).json({
  //     token,
  //   });
  // }

  if (!user) {
    res.status(401).json({ success: false, data: "Unauthorized" });
  }else{
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(401).json({ success: false, data: "Invalid credentials" });
  } else {
    let payload = { subject: user._id };
    let token = jwt.sign(payload, config.JWT_SECRET);
    res.status(200).json({
      token,
    });
  }
 }
};

exports.getMe = async (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.decode(token);
  const me = await User.findOne({ _id: user.subject }).select({ password: 0 });
  res.send(me);
};
//   get users all

exports.getAll = async (req, res) => {
  const all = await User.find();
  res.send(all);
};

// PUT - /user/:id
exports.updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate({ _id: req.params.id });
  if (!user) {
    res.status(404).json({ success: false, data: "Auth Not Found" });
  }
  user.username = req.body.username;
  user.password = req.body.password;
  await user
    .save()
    .then(() => {
      res.status(200).json({ success: true, data: user });
    })
    .catch((error) => {
      res.status(400).json({ success: false, error: error });
    });
};

exports.deleteUSer = async (req, res, next) => {
  await User.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({ success: true, data: [] });
};
