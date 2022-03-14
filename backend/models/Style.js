const mongoose = require('mongoose');

const StyleSchema = new mongoose.Schema(
  {
    styles: {
      type: String,
    },
    tourID: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Style', StyleSchema);
