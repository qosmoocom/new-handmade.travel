const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    tourName: {
      type: String,
      required:true
    },
    type_id: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tour", tourSchema);
