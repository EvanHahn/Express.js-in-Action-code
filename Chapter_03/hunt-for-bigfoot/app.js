var express = require("express");
var morgan = require("morgan");
var basicAuth = require("basic-auth-connect");
var path = require("path");

var app = express();

app.use(morgan("short"));

app.use(function(req, res, next) {
  var now = new Date();
  if ((now.getDate() === 12) && (now.getMonth() === 11)) {
    next();
  } else {
    res.status(404);
    res.send("Bigfoot not found!");
  }
});

app.use(basicAuth("bigfoot", "yeti1"));

app.use(function(req, res) {
  var bigfootImagePath = path.resolve("bigfoot.jpg");
  res.sendFile(bigfootImagePath);
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
