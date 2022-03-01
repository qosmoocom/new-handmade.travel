const mongoose = require("mongoose");

const txtSchema = new mongoose.Schema(
  {
    data:[{
      type: String,
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Text", txtSchema);
