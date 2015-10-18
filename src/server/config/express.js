var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');


module.exports = function(app, config) {

  app.set('views', config.rootPath + '/server/views');
  app.use(cookieParser());
  app.use(bodyParser());
  app.use(express.static(config.rootPath + '/public'));
}