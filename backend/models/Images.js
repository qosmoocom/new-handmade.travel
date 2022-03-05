const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required:true
    },
    tourID: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: true,
    },
    tourAuthor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
