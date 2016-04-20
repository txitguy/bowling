'use strict';

var config = require('../config');
var changed = require('gulp-changed');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');

gulp.task('images', function() {

	return gulp.src(config.images.src)

		// Grab any new or changed images
		.pipe(changed(config.images.dest))

		// Minify images if in production mode
		.pipe(gulpif(global.isProd, imagemin()))

		// Write image files to destination
		.pipe(gulp.dest(config.images.dest))

		// Reload browser
		.pipe(livereload());

});
