const gulp = require('gulp');
const del = require('del');
const connect = require('gulp-connect');
const config = require('./config.js');

gulp.task('default', ['build']);

gulp.task('clean', function(){
  return del(['build']);
});

gulp.task('build', ['clean'], function(){
  return gulp.src(['index.html','static/**/*'])
  .pipe(gulp.dest('build'));
});

gulp.task('no-clean-build', function(){
  return gulp.src(['index.html','static/**/*'])
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});

gulp.task('connect', ['build'], function(){
  return connect.server({
    root : 'build',
    livereload: true
  });
});

gulp.task('watch', ['connect'], function(){
  return gulp.watch(['index.html', 'static/**/*'], ['no-clean-build']);
});
