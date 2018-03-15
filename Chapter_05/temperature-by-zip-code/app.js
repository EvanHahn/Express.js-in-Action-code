var path = require("path");
var express = require("express");
var zipdb = require("zippity-do-dah");
var DarkSky = require('forecast.io');
//https://www.npmjs.com/package/forecast.io

var app = express();

var options = {
  APIKey: "pasteYourDarksky.netSecretApiKeyHere",
  timeout: 1000
},
darksky = new DarkSky(options);

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
    return;
  }

  var latitude = location.latitude;
  var longitude = location.longitude;
  
  darksky.get(latitude, longitude, function (err, result, data) {
    if (err) throw err;
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
