var express = require("express");
var morgan = require("morgan");

var app = express();

app.use(morgan("dev"));

app.use(function(req, res, next) {
  if (req.url === "/") {
    next();
  } else if (req.url === "/throw") {
    throw new Error("Gimme that error");
  } else {
    next("You didn't visit the root!");
  }
});

app.use(function(req, res) {
  res.send("Welcome to the homepage.");
});

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500);
  next(err);
});

app.use(function(err, req, res, next) {
  res.send("Got an error: " + err);
});

app.listen(3000, function() {
  console.log("App started");
});
