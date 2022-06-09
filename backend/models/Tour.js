const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    tourName: {
      type: String,
      required: true,
    },
    tourTexts: {
      type: String,
      required: true,
    },
    tourStyles: {
      type: String,
    },
    tourAuthor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    isItActive: {
      type: String,
      required: true,
      default: 'published',
    },
    tour_id: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    checkforid: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tour", tourSchema);
