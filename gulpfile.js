const
  gulp = require('gulp'),
  pug  = require('gulp-pug'),
  jsx  = require('gulp-jsx'),

  babel  = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),

  preprocess = require('gulp-preprocess');

gulp.task('html', function(){
  return gulp.src('___src/views/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('__build'))
});

gulp.task('copy-sources', function() {
  return gulp
    .src([
      'node_modules/requirejs/require.js',
      'node_modules/redux/dist/redux.min.js',
      'node_modules/react/dist/react.min.js',
      'node_modules/react-dom/dist/react-dom.min.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('__build'));
});

gulp.task('jsx', function(){
  return gulp.src('___src/assets/javascripts/*.jsx')
    .pipe(babel({
      presets: ["es2015", "react"]
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('__build'))
});

gulp.task('js', function(){
  return gulp.src('___src/assets/javascripts/*.js')
    .pipe(preprocess({ context: { NOCACHE_STAMP: Math.random() } }))
    .pipe(babel({ presets: ["es2015"] }))
    // .pipe(uglify())
    .pipe(gulp.dest('__build'))
});

gulp.task('default', [
  'html',
  'js', 'jsx',
  'copy-sources'
]);
