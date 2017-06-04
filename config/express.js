var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var compression = require('compression');

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'pug');

    require('../app/routes/index.routes')(app);
    return app;
}