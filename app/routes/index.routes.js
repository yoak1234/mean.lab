module.exports = function(app) {
    index = require('../controllers/index.controller');
    app.get('/home', index.home);
}