var babel = require('babel');

module.exports = function (wallaby) {
    return {
        files: [
            "src/public/vendor/jquery/dist/jquery.min.js",
            "src/public/vendor/angular/angular.js",
            "src/public/vendor/angular-mocks/angular-mocks.js",
            "src/public/app/app.js",
            "src/public/app/**/*.js",
            "src/public/**/*.html"
        ],
        tests: [
            "tests/front/**/*.js",
            "tests/front/**/*.es6"
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
//module.exports = function (wallaby) {
//    return {
//        files: [
//            "server.js",
//            "src/server/**/*.js"
//        ],
//        tests: [
//            "tests/backend/**/*.js"
//        ],
//        env: {
//            type: 'node'
//        },
//        testFramework: 'mocha',
//        compilers: {
//            "**/*.js": wallaby.compilers.babel(
//                {
//                    babel: babel,
//                    stage: 0
//                }
//            )
//        }
//    }
//}