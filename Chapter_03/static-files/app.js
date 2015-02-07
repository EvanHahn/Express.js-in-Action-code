var express = require("express");
var path = require("path");

var app = express();

var staticPath = path.resolve("static");
app.use(express.static(staticPath));

app.use(function(req, res) {
  res.send("No static file matches that path!");
});

app.listen(3000, function() {
  console.log("App started");
});
