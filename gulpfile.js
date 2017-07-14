var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
// var rev = require('gulp-rev');
// var del = require('del');



gulp.task('pack-js', function() {
	return gulp.src(['public/javascripts/app.js', 'public/javascripts/controllers/*.js', 'public/javascripts/services/socketService.js'])
		.pipe(concat('bundle.js'))
		.pipe(minify({
			ext: {
				min: '.js'
			},
			noSource: true
		}))
		.pipe(gulp.dest('public/build/js'))
});

gulp.task('pack-css', function() {
	return gulp.src(['public/stylesheets/style.css', 'public/stylesheets/buttons/css/*.css'])
		.pipe(concat('stylesheet.css'))
		.pipe(cleanCss())
		.pipe(gulp.dest('public/build/css'))
});

gulp.task('default', ['pack-js', 'pack-css']);
