const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InternshipSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    require: true
  },
  study: {
    type: String,
    required: true,
    trim: true
  },
  approved: {
    type: Boolean,
    default: false
  }
});

module.exports = InternshipSchema;
