var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');
gulp.task('default', ['sass', 'sass:watch'], function() {

});

gulp.task('sass', function () {
  return gulp.src('./app/www/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/www/css'))
    .pipe(livereload());;
});

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('./app/www/sass/**/*.scss', ['sass']);
});
