var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();
gulp.task('default', ['browser-sync', 'sass', 'sass:watch'], function() {

});

gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/www/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/sass/**/*.scss', ['sass'], function (event) {
    console.log(event);
  });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "172.17.0.1",
        files: ["app/**/*.php", "app/**/*.css"]
    });
});
