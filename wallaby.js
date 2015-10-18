var babel = require('babel');

module.exports = function (wallaby) {
    return {
        files: [
            "bower_components/jquery/dist/jquery.min.js",
            "bower_components/angular/angular.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "src/app/app.js",
            "src/app/**/*.js",
            "src/app/**/*.es6",
            "src/**/*.html"
        ],
        tests: [
            "tests/**/*.es6"
        ],
        compilers: {
            "**/*.es6": wallaby.compilers.babel(
                {
                    babel: babel,
                    stage: 0
                }
            )
        }
    }
}