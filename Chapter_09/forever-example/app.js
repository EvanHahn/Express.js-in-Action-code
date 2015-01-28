var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Visit /crash to crash the site!");
});

app.get("/crash", function(req, res) {
  res.status(500);
  res.send("Crashing the site...");
  process.exit(0);
});

app.listen(3000, function() {
  console.log("App started");
});
