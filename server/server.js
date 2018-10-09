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
const { auth } = require("./middlewares/auth");

app.use(bodyParser.json());
app.use(cookieParser());

// GET
app.get("/api/auth", auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    role: req.user.role
  });
});

app.get("/api/logout", auth, (req, res) => {
  User.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
});

app.get("/api/allFiles", (req, res) => {
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);
  const order = req.query.order;

  // .populate might be wrong approach
  User.find()
    .populate({ path: "files" })
    .skip(skip)
    .limit(limit)
    .exec((err, doc) => {
      if (err) return res.status(400).send(err);
      res.send(doc);
    });
});

// TODO: New approach for filtering
app.get("/api/getFiles", (req, res) => {
  let grade = req.query.grade;
  let study = req.query.study;
  let subject = req.query.subject;

  User.find(
    { files: { $elemMatch: { study: study, subject: subject, grade: grade } } },
    (err, doc) => {
      if (err) res.status(400).send(err);
      res.send(doc);
    }
  );
});

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

app.patch("/api/addFile", (req, res) => {
  User.findByToken(req.headers.auth, (err, user) => {
    if (err) res.json({ message: err });
    user.set({
      files: [
        {
          name: req.body.files[0].name,
          subject: req.body.files[0].subject,
          grade: req.body.files[0].grade,
          study: req.body.files[0].study
        }
      ]
    });
    user.save((err, updatedUser) => {
      if (err) return handleError(err);
      res.send(updatedUser);
    });
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`SERVER RUNNNING`);
});
