const JWT = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const config = require("../config/config");
exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  }
  if (!token) {
    return next(new ErrorResponse("No authorize to access this route", 401));
  }
  try {
    const decoded = JWT.verify(token, config.JWT_SECRET);
    req.user = await User.findById(decoded.subject);
    next();
  } catch (err) {
    return next(new ErrorResponse("No authorize to access this route", 401));
  }
};

exports.moderator = function (req, res, next) {
  if (req.user.role !== "moderator") {
    return next(
      new ErrorResponse(
        `User role ${req.user.role} is not authorized to access this route`,
        403
      )
    );
  }
  next();
};

exports.bloger = function (req, res, next) {
  if (req.user.role !== "bloger") {
    return next(
      new ErrorResponse(
        `User role ${req.user.role} is not authorized to access this route`,
        403
      )
    );
  }
  next();
};


exports.admin = function (req, res, next) {
  if (req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User role ${req.user.role} is not authorized to access this route`,
        403
      )
    );
  }
  next();
};
exports.moderatorAll = function (req, res, next) {
  if (req.user.role !== "moderator") {
    return next(
      new ErrorResponse(
        `User role ${req.user.role} is not authorized to access this route`,
        403
      )
    );
  }
  next();
};
