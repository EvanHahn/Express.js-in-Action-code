var express = require("express");
var path = require("path");

var app = express();

app.use(function(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
});

app.use(function(req, res, next) {
  var now = new Date();
  if ((now.getDate() === 12) && (now.getMonth() === 11)) {
    next();
  } else {
    res.status(404);
    res.send("Bigfoot not found!");
  }
});

app.use(function(req, res) {
  var bigfootImagePath = path.resolve("bigfoot.jpg");
  res.sendFile(bigfootImagePath);
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
