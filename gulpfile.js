var
  gulp = require('gulp'),
  pug = require('gulp-pug'),
  jsx = require('gulp-jsx'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('html', function(){
  return gulp.src('___src/views/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('__build'))
});

gulp.task('copy-sources', function() {
  return gulp
    .src([
      'node_modules/requirejs/require.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('__build'));
});

gulp.task('copy-react-sources', function() {
  return gulp
    .src([
      'node_modules/react/dist/react.min.js',
      'node_modules/react-dom/dist/react-dom.min.js'
    ])
    .pipe(gulp.dest('__build'));
});

gulp.task('jsx', function(){
  return gulp.src('___src/assets/javascripts/*.jsx')
    .pipe(babel({
      presets: ["es2017", "react"]
    }))
    .pipe(gulp.dest('__build'))
});

gulp.task('js', function(){
  return gulp.src('___src/assets/javascripts/*.js')
    .pipe(babel({
      presets: ["es2017"]
    }))
    .pipe(gulp.dest('__build'))
});

gulp.task('concat-js-files', function() {
  return gulp
    .src([
      '__build/react.min.js',
      '__build/react-dom.min.js',
      '__build/hello_world.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('__build'));
});

gulp.task('default', [
  'html',
  'copy-react-sources',
  'copy-sources',
  'js',
  'jsx',
  'concat-js-files'
]);
