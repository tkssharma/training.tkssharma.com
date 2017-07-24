process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express.js');
var config = require('./config/config.js')
var app = express();

app.listen(process.env.PORT || config.port);
console.log("App Listning on port " + config.port);
module.exports = app;
