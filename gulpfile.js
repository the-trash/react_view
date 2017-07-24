var
  gulp = require('gulp'),
  pug = require('gulp-pug');

gulp.task('html', function(){
  return gulp.src('___src/views/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('__build'))
});

gulp.task('default', ['html']);
