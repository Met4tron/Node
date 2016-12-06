var express = require('express');
var consign = require('consign');

var app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

consign().include('app/routes',{cwd: 'app'})
.then('config/dbConnection.js')
.then('app/models')
.into(app);


module.exports = app;
