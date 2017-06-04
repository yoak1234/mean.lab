var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function () {
    var app = express();

    app.use(morgan('dev'));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    require('../app/routes/index.routes')(app);
    return app;
}