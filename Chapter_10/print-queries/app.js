var express = require("express");
var util = require("util");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(function(req, res) {
  res.type("text/plain");
  res.send([
    "req.query looks like this:",
    util.inspect(req.query)
  ].join("\n\n"));
});

app.listen(app.get("port"), function() {
  console.log("App started on port " + app.get("port"));
});
