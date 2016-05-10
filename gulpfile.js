var gulp = require('gulp'),
    transform = require('vinyl-transform'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),

    css = {src: './app/sass/**/*.scss', dest: './app/www/css', watch : 'app/www/**/*.css'},
    php = {src: "app/**/*.php", dest: "app/**/*.php"},
    js = {src: './app/es6/**/*.js', dest: './app/www/js', watch: './app/www/**/*.js'};

gulp.task('default', ['browser-sync', 'sass', 'sass:watch', 'browserify', 'es6:watch'], function() {

});

gulp.task('sass', function () {
  return gulp.src(css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(css.dest));
});

gulp.task('sass:watch', function () {
  gulp.watch(css.src, ['sass'], function (event) {
    console.log(event);
  });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "php",
        reloadDelay: 0,
        files: [php.src, css.watch, js.watch]
    });
});

gulp.task('browserify', function () {
  return browserify({entries: './app/es6/index.js', debug: true})
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./app/www/js/'));

  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src([js.src])
    .pipe(browserified)
    .pipe(gulp.dest(js.dest));
});

gulp.task('es6:watch', function () {
  gulp.watch(js.src, ['browserify'], function (event) {
    console.log(event);
  });
});
