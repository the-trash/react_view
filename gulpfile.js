var
  gulp = require('gulp'),
  pug = require('gulp-pug'),
  jsx = require('gulp-jsx'),
  babel = require('gulp-babel');

gulp.task('html', function(){
  return gulp.src('___src/views/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('__build'))
});

gulp.task('jsx', function(){
  return gulp.src('___src/assets/javascripts/*.jsx')
    .pipe(jsx({
      factory: 'React.createClass'
    }))
    .pipe(babel({
      presets: ['es2017']
    }))
    .pipe(gulp.dest('__build'))
});

gulp.task('default', ['html', 'jsx']);
