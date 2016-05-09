var gulp = require('gulp'),
    transform = require('vinyl-transform'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();
gulp.task('default', ['browser-sync', 'sass', 'sass:watch', 'browserify', 'es6:watch'], function() {

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
        proxy: "php",
        files: ["app/**/*.php", "app/**/*.css"]
    });
});

gulp.task('browserify', function () {
  return browserify('./app/es6/index.js')
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./app/www/js/'));

  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(['./app/es6/**/*.js'])
    .pipe(browserified)
    .pipe(gulp.dest('./app/www/js'));
});

gulp.task('es6:watch', function () {
  gulp.watch('./app/es6/**/*.js', ['browserify'], function (event) {
    console.log(event);
  });
});
