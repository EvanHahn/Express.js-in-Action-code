var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello, World!");
});

http.createServer(app).listen(3000);
