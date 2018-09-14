const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/config").get(process.env.NODE_ENV);
const mongoose = require("mongoose");

const app = express();

// mongoose
mongoose.Promise = global.Promise;
mongose.connect(config.DATABASE);

// executed every time when app receives req
app.use(bodyParser.json());
app.use(cookieParser());
