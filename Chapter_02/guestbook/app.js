var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var formBody = require("body/form");

var app = express();

var entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/new-entry", function(req, res) {
  res.render("new-entry");
});

app.post("/new-entry", function(req, res) {
  formBody(req, {}, function(err, entry) {
    if (err) {
      res.status(500).send("Internal server error.");
      return;
    }
    if (!entry.title || !entry.body) {
      res.status(400).send("Entries must have a title and a body.");
      return;
    }
    entries.push({
      title: entry.title,
      body: entry.body,
      published: new Date()
    });
    res.redirect("/");
  });
});

app.use(function(req, res) {
  res.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
  console.log("Guestbook app started.");
});
