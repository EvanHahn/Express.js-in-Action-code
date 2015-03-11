var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var csrf = require("csurf");

var app = express();

app.set("view engine", "ejs");

app.use(session({
  secret: "@lHJr+JrSwv1W&J904@W%nmWf++K99pRBvk&wBaNAs4JTid1Ji",
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(csrf());

app.get("/", function(req, res) {
  res.render("index", {
    csrfToken: req.csrfToken()
  });
});

app.post("/submit", function(req, res) {
  res.send("Form submission worked!");
});

app.use(function(err, req, res, next) {
  if (err.code !== "EBADCSRFTOKEN") {
    next(err);
    return;
  }
  res.status(403);
  res.send("CSRF error.");
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("Non-CSRF error.");
});

app.listen(3000, function() {
  console.log("App started");
});
