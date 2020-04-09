var express = require('express')
var app = express();
var port = process.env.PORT || 3000;



var routes = require('./api/routes');
routes(app);

// app.listen(port, function () {
    
// });

var server = app.listen(port, function () {
    console.log('Server started on port: ' + port);
  });

module.exports = server;