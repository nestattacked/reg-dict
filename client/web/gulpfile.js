const gulp = require('gulp');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const replace = require('gulp-replace');
const del = require('del');
const connect = require('gulp-connect');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({browsers:['last 2 versions']});
const config = require('./config.js');

gulp.task('default', ['build']);

gulp.task('clean-tmp', function(){
  return del(['tmp']);
});

gulp.task('clean-img', function(){
  return del(['build/static/img']);
});

gulp.task('clean-css', function(){
  return del(['build/static/css']);
});

gulp.task('clean-js', function(){
  return del(['build/static/javascript']);
});

gulp.task('clean-html', function(){
  return del(['build/index.html']);
});

gulp.task('build', ['html', 'img']);

gulp.task('dev-build', ['dev-html', 'img', 'dev-js', 'dev-css']);

gulp.task('dev-html', ['clean-html'], function(){
  return gulp.src(['index.html'], {base: './'})
  .pipe(replace(/https:\/\/api\.nestattacked\.com\/regdict\/v1\//g, config.apiPath))
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});

gulp.task('html', ['js', 'css'], function(){
  var jsManifest = gulp.src('./tmp/javascript/rev-manifest.json');
  var cssManifest = gulp.src('./tmp/css/rev-manifest.json');
  return gulp.src(['index.html'], {base: './'})
  .pipe(revReplace({manifest:jsManifest}))
  .pipe(revReplace({manifest:cssManifest}))
  .pipe(replace(/\.\/static\//g, config.staticPath))
  .pipe(replace(/https:\/\/api\.nestattacked\.com\/regdict\/v1\//g, config.apiPath))
  .pipe(gulp.dest('build'));
});

gulp.task('img', ['clean-img'], function(){
  return gulp.src(['static/img/*'], {base: './'})
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});

gulp.task('dev-css', ['clean-css'], function(){
  return gulp.src(['static/css/*.less', 'static/css/*.css'], {base: './'})
  .pipe(less({
    plugins: [autoprefix]
  }))
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});

gulp.task('css', ['clean-css'], function(){
  return gulp.src(['static/css/*.less', 'static/css/*.css'], {base: './'})
  .pipe(less({
    plugins: [autoprefix]
  }))
  .pipe(rev())
  .pipe(gulp.dest('build'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('tmp/css'));
});

gulp.task('dev-js', ['clean-js'], function(){
  return gulp.src(['static/javascript/*'], {base: './'})
  .pipe(replace(/https:\/\/api\.nestattacked\.com\/regdict\/v1\//g, config.apiPath))
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
})

gulp.task('js', ['clean-js'], function(){
  return gulp.src(['static/javascript/*'], {base: './'})
  .pipe(replace(/\.\/static\//g, config.staticPath))
  .pipe(replace(/https:\/\/api\.nestattacked\.com\/regdict\/v1\//g, config.apiPath))
  .pipe(rev())
  .pipe(gulp.dest('build'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('tmp/javascript'));
});

gulp.task('connect', ['dev-build'], function(){
  connect.server({
    root : 'build',
    livereload: true
  });
});

gulp.task('watch', ['connect'], function(){
  gulp.watch(['static/css/*'], ['dev-css']);
  gulp.watch(['static/javascript/*'], ['dev-js']);
  gulp.watch(['index.html'], ['dev-html']);
  gulp.watch(['static/img/*'], ['img']);
});
