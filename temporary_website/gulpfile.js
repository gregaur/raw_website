var gulp = require('gulp')
browserSync = require('browser-sync').create()
sass = require('gulp-sass')
autoprefixer = require('gulp-autoprefixer')
sourcemaps = require('gulp-sourcemaps');




gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "../portfolio-temp"
    });

    gulp.watch("css/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});






gulp.task('sass', function () {
  gulp.src('css/scss/*.scss')
  	.pipe(sourcemaps.init())

    
    .pipe(sass({style: 'compressed'}))
    .on('error', onError)	
  	.pipe(autoprefixer({browsers: ['last 5 versions'],cascade: false}))
  	.pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('css/css'))
    .pipe(browserSync.stream());
});





gulp.task('default', ['serve']);


function onError(err) {
  console.log(err);
  this.emit('end');
}





