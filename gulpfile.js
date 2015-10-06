var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function(){
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
  gulp.watch('assets/sass/**/*.scss', ['sass']); 
  // Other watchers
})
