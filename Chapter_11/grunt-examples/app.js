var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "tmp/serve")));

app.listen(3000, function() {
  console.log("App started on port 3000.");
});
