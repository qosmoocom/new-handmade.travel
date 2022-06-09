const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    russianName: {
      type: String,
      required: true,
    },
    englishName: {
      type: String,
      required: true,
    },
    espanolName: {
      type: String,
      required: true,
    },
    italiyName: {
      type: String,
      required: true,
    },
    frenchName: {
      type: String,
      required: true,
    },
    deutschName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
