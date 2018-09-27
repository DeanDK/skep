const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
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
    max: 12
  },
  study: {
    type: String,
    required: true,
    trim: true
  }
});

const File = mongoose.model("File", fileSchema);

module.exports = { File };
