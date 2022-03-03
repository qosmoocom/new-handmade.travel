const mongoose = require("mongoose");

const txtSchema = new mongoose.Schema(
  {
    textes:{
      type: String,
    },
    styles:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Text", txtSchema);
