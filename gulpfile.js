var gulp = require('gulp');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('js', function() {
  gulp.src('app/')
    .pipe(gulp.dest('app'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/', ['js']);
});

//join serve && dev
gulp.task('dev', function(cb) {

  runSequence(['watch'], cb);

});