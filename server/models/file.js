const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  grade: {
    type: Number,
    min: 7,
    max: 12,
    require: true
  },
  study: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = FileSchema;
