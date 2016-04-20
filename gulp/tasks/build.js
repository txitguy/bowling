'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function(cb) {

	// if cb is not defined, define it as an empty function
	cb = cb || function() {
		};

	// Force development mode for development task
	global.isProd = false;

	// Build Only
	global.buildOnly = true;

	// Run sequence of styles, images, views and browserify
	runSequence(['styles', 'images', 'views', 'lint'], 'browserify', 'karma', cb);

});
