var express = require("express");
var path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);

var viewsPath = path.join(__dirname, "views");
app.set("view engine", "ejs");
app.set("views", viewsPath);

app.get("/", function(req, res) {
  if (req.accepts("html")) {
    res.render("index", { ip: req.ip });
  } else if (req.accepts("json")) {
    res.json({ ip: req.ip });
  } else {
    res.type("text");
    res.send(req.ip);
  }
});

app.listen(app.get("port"), function() {
  console.log("App started on port " + app.get("port"));
});

module.exports = app;
