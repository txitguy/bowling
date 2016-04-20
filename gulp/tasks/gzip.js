'use strict';

var gulp = require('gulp');
var gzip = require('gulp-gzip');
var config = require('../config');

gulp.task('gzip', function() {

	// gzip source files
	return gulp.src(config.gzip.src)

		// Get gzip configuration settings
		.pipe(gzip(config.gzip.options))

		// Write gzip files to the destination
		.pipe(gulp.dest(config.gzip.dest));

});
