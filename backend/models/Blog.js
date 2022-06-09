const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    blogName: {
      type: String,
      required: true,
    },
    blogTexts: {
      type: String,
      required: true,
    },
    blogAuthor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    isItActive: {
      type: String,
      required: true,
      default: "published",
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
