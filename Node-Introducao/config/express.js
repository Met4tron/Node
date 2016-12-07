var express = require('express');
var load = require('express-load');

module.exports = () => {

  var app = express();

  app.set('view engine','ejs');
  app.set('views','./app/views');

  //Express load

  load('routes', {cwd: 'app'})
  .then('infra')
  .into(app);

  return app;
};
