var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var config = require('./config/config');
var routes = require('./routes/index');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error'));
db.once('open', () => {
  console.log("Successfully connected to db");
});

app.listen(config.port, () => {
    console.log('App listening on port ' + config.port);
});