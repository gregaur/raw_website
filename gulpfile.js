var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var babel = require('gulp-babel');

//initialize browsersync


gulp.task('browsersync-init', [], function() {
    browserSync.init({
        server: "./"
    });
});



gulp.task('rawli-js', ['js'],function(){
    gulp.watch("app/js/*.js", ['js']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("dist/projects/*.html").on('change', browserSync.reload);
});


gulp.task('js',function(){
    return gulp.src([
        'app/js/jquery.min.js',
        // 'node_modules/foundation-sites/dist/js/foundation.min.js',
        // 'node_modules/foundation-sites/dist/js/foundation.util.timerAndImageLoader.js',
        'app/js/main.js'])
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    //.pipe(uglify())
    .pipe(rename("all.min.js"))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});




gulp.task('rawli-sass', ['sass'],function(){
    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("dist/projects/*.html").on('change', browserSync.reload);
});


gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('../../maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});


gulp.task('default', ['browsersync-init','rawli-sass','rawli-js']);













// gulp.task('sass', function () {
//   gulp.src('css/scss/*.scss')
//     .pipe(sourcemaps.init())

    
//     .pipe(sass({style: 'compressed'}))
//     .on('error', onError)   
//     .pipe(autoprefixer({browsers: ['last 5 versions'],cascade: false}))
//     .pipe(sourcemaps.write('maps'))
//     .pipe(gulp.dest('css/css'))
//     .pipe(browserSync.stream());
// });





// gulp.task('default', ['serve']);




