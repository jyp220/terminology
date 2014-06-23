var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = require('./application/router');
var http = require('http');
var dbPath = 'mongodb://localhost/terminology';

// import the data layer
var mongoose = require('mongoose');
// import the models
var models = {
    User: require('./application/model/user')(mongoose)
};

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//db connection
mongoose.connect(dbPath, function onMongooseError(err) {
    if (err) throw err;
});

app.use('/', router);

//router
router.init(app, models);

app.listen(8080);
console.log('Listening on port 8080');
