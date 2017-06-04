process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express')
var portNumber = 1234;

var app = express();
app.listen(portNumber);
module.exports = app;

console.log(`Server is running at port number: ${portNumber}.`);