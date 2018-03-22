var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!");
});

http.createServer(app).listen(3000);
