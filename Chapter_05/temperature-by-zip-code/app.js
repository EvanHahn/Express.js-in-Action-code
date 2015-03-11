var path = require("path");
var express = require("express");
var zipdb = require("zippity-do-dah");
var Reckon = require("reckon");

var app = express();
var weather = new Reckon({ apiKey: "YOUR FORECAST.IO API KEY HERE" });

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.get(/^\/(\d{5})$/, function(req, res, next) {
  var zipcode = req.params[0];
  var location = zipdb.zipcode(zipcode);
  if (!location.zipcode) {
    next();
  }
  weather.get({
    lat: location.latitude,
    lon: location.longitude
  }, function(data) {
    res.json({
      zipcode: zipcode,
      temperature: data.currently.temperature
    });
  });
});

app.use(function(req, res) {
  res.status(404).render("404");
});
app.listen(3000);
