var gulp = require("gulp");
var webserver = require("gulp-webserver");
var concat = require("gulp-concat"),
  minifyCSS = require("gulp-minify-css"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename");

gulp.task("webserver", function() {
  gulp.src("./app/").pipe(
    webserver({
      port: 8080,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: "index.html"
    })
  );
});
/*
gulp.task('concat', function() {
    return gulp.src('./app/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('minify-css',['concat'], function() {
    return gulp.src('./build/css/all.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('uglify', function() {
    return gulp.src('./app/js/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./build/js/'));
});
gulp.task('default',['minify-css','uglify']);
*/
gulp.task("default", ["webserver"]);
