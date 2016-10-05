// require gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');


gulp.task('sass', function () {
  return gulp.src('./assets/styles_sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/styles/css'));
});

gulp.task('imagemin',function(){
	return gulp.src('./assets/images/src/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./assets/images/build/'))
});
 
gulp.task('clean', function () {
	return gulp.src('./assets/images/build', {read: false})
		.pipe(clean());
});
gulp.task('jshint', function() {
  return gulp.src(['./scripts/*.js','./scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {beep: true}))
});

gulp.task('watch', function() {
  gulp.watch('./assets/styles_sass/*.scss', ['sass']);
  gulp.watch('./assets/images/src/**/*', ['imagemin']);
});

