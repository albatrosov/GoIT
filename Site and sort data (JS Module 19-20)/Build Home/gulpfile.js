var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {

 
gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('scriptAll.js'))
    .pipe(gulp.dest('./js/'));
});


});