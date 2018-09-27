const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/config").get(process.env.NODE_ENV);
const mongoose = require("mongoose");

const app = express();

// mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

const { User } = require("./models/user");
const { File } = require("./models/file");
const { auth } = require("./middlewares/auth");

app.use(bodyParser.json());
app.use(cookieParser());

// GET
app.get("/api/auth", auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email
  });
});

app.get("/api/allFiles", (req, res) => {
  let skip = parseInt(req.query.skip);
  let limit = parseInt(req.query.limit);
  let order = req.query.order;

  // ORDER = asc || desc
  File.find()
    .skip(skip)
    .sort({ _id: order })
    .limit(limit)
    .exec((err, doc) => {
      if (err) return res.status(400).send(err);
      res.send(doc);
    });
});

// POST
app.post("/api/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        isAuth: false,
        message: "Email has not been found"
      });
    }

    user.comparePasswords(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          isAuth: false,
          message: "Wrong password"
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("auth", user.token).json({
          isAuth: true,
          id: user._id,
          email: user.email
        });
      });
    });
  });
});

app.post("/api/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ message: err });
    res.status(200).json({
      success: true,
      user: doc
    });
  });
});

app.post("/api/file", (req, res) => {
  const file = new File(req.body);

  file.save((err, doc) => {
    if (err) return res.json({ message: err });
    res.status(200).json({
      success: true,
      file: doc
    });
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`SERVER RUNNNING`);
});
