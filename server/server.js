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

// POST

app.use(bodyParser.json());
app.use(cookieParser());

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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`SERVER RUNNNING`);
});
