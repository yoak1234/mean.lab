var express = require('./config/express')

var app = express();
app.listen(1234);
module.exports = app;

console.log('Server is running at port number.');