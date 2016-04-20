'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

	// if cb is not defined, define it as an empty function
	cb = cb || function() {
		};

	// Force production mode for production task
	global.isProd = true;

	// Run task sequence of styles, images, fonts, views and browserify then gzip
	runSequence(['styles', 'images', 'views'], 'browserify', 'gzip', cb);

});
