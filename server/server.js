const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const FormData = require("form-data");
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
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
});

app.get("/api/allFiles", (req, res) => {
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);
  const order = req.query.order;

  User.find({ files: { $exists: true }, $where: "this.files.length>0" })
    .skip(skip)
    .sort({ _id: order })
    .limit(limit)
    .exec((err, doc) => {
      if (err) res.status(400).send(err);
      console.log(doc);
      res.send(doc);
    });

  // User.find({}, { files: { $slice: [skip, limit] } }).exec((err, doc) => {
  //   console.log(doc);
  //   if (err) res.status(400).send(err);
  //   res.send(doc);
  // });
});

app.get("/api/allInternships", (req, res) => {
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);
  const order = req.query.order;

  User.find({
    internships: { $exists: true },
    $where: "this.internships.length>0"
  })
    .limit(limit)
    .skip(skip)
    .exec((err, doc) => {
      if (err) res.status(400).send(err);
      console.log(doc);
      res.send(doc);
    });
});

app.get("/api/getUserFiles", (req, res) => {
  User.findOne({ _id: req.query.id }, (err, user) => {
    if (!user)
      return res.json({ isAuth: false, message: "Email has not been found" });
    res.send(user);
  });
});

// TODO: New approach for filtering
app.get("/api/getFiles", (req, res) => {
  let grade = req.query.grade;
  let study = req.query.study;

  User.find(
    { files: { $elemMatch: { study: study, grade: grade } } },
    (err, doc) => {
      if (err) res.status(400).send(err);
      res.send(doc);
    }
  );
});

app.get("/api/getInternships", (req, res) => {
  if (req.query.study && req.query.country) {
    User.aggregate(
      { $project: { internships: 1 } },
      { $unwind: "$internships" },
      {
        $match: {
          "internships.study": req.query.study,
          "internships.country": req.query.country
        }
      }
    ).exec((err, internships) => {
      if (err) throw err;
      res.status(200).json(internships);
    });
  }

  if (req.query.study) {
    User.aggregate(
      { $project: { internships: 1 } },
      { $unwind: "$internships" },
      {
        $match: {
          "internships.study": req.query.study
        }
      }
    ).exec((err, internships) => {
      if (err) throw err;
      res.status(200).json(internships);
    });
  }

  if (req.query.country) {
    User.aggregate(
      { $project: { internships: 1 } },
      { $unwind: "$internships" },
      {
        $match: {
          "internships.country": req.query.country
        }
      }
    ).exec((err, internships) => {
      if (err) throw err;
      res.status(200).json(internships);
    });
  }
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
          message: "Password is incorrect"
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

app.patch("/api/addAdmin", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        error: "Email has not be found"
      });
    user.set({ role: 1 });
    user.save((err, updatedUser) => {
      return res.json({
        message: "Admin has been added"
      });
    });
  });
});

app.patch("/api/approved", (req, res) => {
  const isApproved = req.body.shouldApprove;
  const id = req.body.id;
  const file_id = req.body.fileId;
  // use {new: true} in order to return the updated user
  User.findOneAndUpdate(
    { _id: id, "files._id": file_id },
    { $set: { "files.$.approved": isApproved } },
    (err, updatedUser) => {
      if (err) res.json({ message: "Something went wrong. Please try again" });
      res.json({ message: "You have approved the project" });
    }
  );
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

app.post("/api/addFile", (req, res) => {
  User.findByToken(req.headers.auth, (err, user) => {
    if (err) res.json({ message: err });
    const file = {
      name: req.body.files[0].name,
      subject: req.body.files[0].subject,
      grade: req.body.files[0].grade,
      study: req.body.files[0].study
    };
    user.files.push(file);
    user.save((err, updatedUser) => {
      if (err)
        return res.json({
          error: "Something went wrong while uploading. Please try again."
        });
      return res.json({
        message:
          "Upload was successfull. Your file will be waiting for approval"
      });
    });
  });
});

app.post("/api/addInternship", (req, res) => {
  User.findByToken(req.headers.auth, (err, user) => {
    if (err) res.json({ message: err });
    const internship = {
      companyName: req.body.internships[0].companyName,
      country: req.body.internships[0].country,
      year: req.body.internships[0].year,
      study: req.body.internships[0].study
    };
    user.internships.push(internship);
    user.save((err, updatedUser) => {
      if (err)
        return res.json({
          error: "Something went wrong while uploading. Please try again."
        });
      return res.json({
        message:
          "Upload was successfull. Your file will be waiting for approval"
      });
    });
  });
});

app.post("/api/deleteFile", (req, res) => {
  User.findByIdAndUpdate(
    req.body.id,
    { $pull: { files: { _id: req.body.fileId } } },
    (err, doc) => {
      if (err) return res.json({ error: err });
      return res.json({ message: "success" });
    }
  );
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`SERVER RUNNNING`);
});
