var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css')

var path = {
    
    prod: {
        
        js: 'prod/js',
        css: 'prod/css'
    },
    
    src: {
        
        js: 'dev/js/*.js',
        css: 'dev/css/*.scss'
    },
    
    watch: {
        
        js: 'dev/js/**/*.js',
        css: 'dev/css/**/*.scss'
    }
}

gulp.task('sass', function () {
    gulp.src(path.src.css) //Выберем наш main.scss
        .pipe(sass()) //Скомпилируем
        .pipe(gulp.dest(path.prod.css))
});

gulp.task('watch', function() {
    
    watch([path.watch.css], function(event, cb) {
        
        gulp.start('sass');
    });
})

gulp.task('default', function() {
  // place code for your default task here
});