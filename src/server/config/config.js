var path = require('path');

module.exports = {
  development: {
    rootPath: path.normalize(__dirname + '/../../'),
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: path.normalize(__dirname + '/../../dist/'),
    port: process.env.PORT || 80
  }
}