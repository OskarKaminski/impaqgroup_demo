var gulp = require('gulp');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');

var paths = {
    es6: ['./src/**/*.es6'],
    filesToCopy: ['./src/**/*', '!./src/**/*.es6'],
    bower: ['./bower_components/**/*']
};

gulp.task('default', ['compileES6', 'copyFiles', 'copyLibs']);

gulp.task('watch', function () {
    gulp.watch(paths.es6, ['compileES6']);
    gulp.watch(paths.filesToCopy, ['copyFiles']);
});

gulp.task('compileES6', function () {
    return gulp.src(paths.es6)
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copyFiles', function () {
    return gulp.src(paths.filesToCopy)
        .pipe(gulp.dest('./dist'));
});

gulp.task('copyLibs', function () {
    return gulp.src(paths.bower)
        .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('webserver', function() {
    gulp.src('./dist/')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 3000
        }));
});