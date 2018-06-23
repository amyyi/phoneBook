var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    react = require('gulp-react'),
    webpack = require('webpack-stream');

function handleError(e) {
  console.log(e.stack || e.toString());
  return this.emit('end');
}

gulp.task('styles', function(){
    gulp.src('dist/style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dest/'));
});

gulp.task('webpack', function() {
  var w = webpack(require('./webpack.config.js')).on('error', handleError);
  return gulp.src('dist/js/main.js')
    .pipe(w)
    .pipe(gulp.dest(path.dirname('dest/bundle.js')));
});
gulp.task('build', ['styles', 'webpack']);

// 建立完build再跑watch
gulp.task('watch', ['build'], function() {
     gulp.watch('dist/style/*.scss', ['styles']);
     gulp.watch('dist/js/*.js', ['webpack']);
     gulp.watch('dist/js/actions/*.js', ['webpack']);
     gulp.watch('dist/js/components/*.js', ['webpack']);
     gulp.watch('dist/js/container/*.js', ['webpack']);
     gulp.watch('dist/js/reducers/*.js', ['webpack']);
});