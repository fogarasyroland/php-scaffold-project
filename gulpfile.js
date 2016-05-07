var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload')
    sourcemaps = require('gulp-sourcemaps');
gulp.task('default', ['sass', 'sass:watch'], function() {

});

gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/www/css'))
    .pipe(livereload());;
});

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});
