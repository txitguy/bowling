'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

	// if cb is not defined, define it as an empty function
	cb = cb || function() {
		};

	// Force development mode for development task
	global.isProd = false;

	// only instrument with coverage if specified
	global.coverage = (process.argv.indexOf('--coverage') !== -1) ? true : false;

	// Run sequence of tasks
	runSequence(['styles', 'images', 'views', 'lint'], 'browserify', 'karma', 'watch', cb);

});
