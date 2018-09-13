const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();

// mongoose

// executed every time when app receives req
app.use(bodyParser.json());
app.use(cookieParser());
