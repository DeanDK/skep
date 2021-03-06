const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./../config/config").get(process.env.NODE_ENV);
const SALT_I = 10;
const FileSchema = require("./file.js");
const InternshipSchema = require("./internship.js");

// add required true
const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  token: {
    type: String
  },
  role: {
    type: Number,
    default: 0 // 0 is student, 1 is admin
  },
  files: [FileSchema],
  internships: [InternshipSchema]
});

/* Method will only be used if user needs to reg
   (so far user we use login as studienet)     */

/* =================================================== */

userSchema.pre("save", function(next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(SALT_I, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

/* generate token if login has be successful,
   token will later on be used for the auth. */
userSchema.methods.generateToken = function(cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), config.SECRET);

  user.token = token;
  user.save(function(err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

/* compares password taken from the input with one from db*/
userSchema.methods.comparePasswords = function(passFromInput, cb) {
  bcrypt.compare(passFromInput, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.statics.findByToken = function(token, cb) {
  var user = this;

  jwt.verify(token, config.SECRET, function(err, decode) {
    user.findOne({ _id: decode, token: token }, function(err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

userSchema.methods.deleteToken = function(token, cb) {
  var user = this;

  user.update({ $unset: { token: 1 } }, (err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
