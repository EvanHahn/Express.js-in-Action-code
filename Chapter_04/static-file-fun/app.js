var app =require('express')();
var path=require('path');
var fs= require('fs');

app.use(function(req,res,next) {
  var filePath = path.join(__dirname,"static", req.url);
  console.log(filePath);
  fs.exists(filePath, function(exists) {
    if (exists) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });

});

app.listen(3000,function() { console.log('app started');});
