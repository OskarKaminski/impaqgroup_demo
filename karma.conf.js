module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    files: [
      'public/vendor/angular/angular.js',
      'public/vendor/angular-resource/angular-resource.js',
      'public/vendor/angular-mocks/angular-mocks.js',
      'test/test-app.js',
      'public/app/**/*.js',
      'test/tests/**/*.js'
    ],
    exclude: [
      'public/app/app.js'
    ],
    preprocessors: {

    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
