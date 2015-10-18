var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./dist/server/config/config')[env];

require('./dist/server/config/express')(app, config);

require('./dist/server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');