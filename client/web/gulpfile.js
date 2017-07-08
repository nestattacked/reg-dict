const gulp = require('gulp');
const del = require('del');
const connect = require('gulp-connect');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({browsers:['last 2 versions']});
const config = require('./config.js');

gulp.task('default', ['build']);

gulp.task('clean-static', function(){
  return del(['build/index.html', 'build/static/img', 'build/static/javascript']);
});

gulp.task('clean-css', function(){
  return del(['build/static/css']);
});

gulp.task('build', ['static', 'css']);

gulp.task('static', ['clean-static'], function(){
  return gulp.src(['index.html','static/img/*', 'static/javascript/*'], {base: './'})
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});

gulp.task('css', ['clean-css'], function(){
  return gulp.src(['static/css/*.less'], {base: './'})
  .pipe(less({
    plugins: [autoprefix]
  }))
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});

gulp.task('connect', ['build'], function(){
  connect.server({
    root : 'build',
    livereload: true
  });
});

gulp.task('watch', ['connect'], function(){
  gulp.watch(['static/css/*'], ['css']);
  gulp.watch(['index.html', 'static/img/*', 'static/javascript/*'], ['static']);
});
