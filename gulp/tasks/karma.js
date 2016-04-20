'use strict';

var config = require('../config');
var gulp = require('gulp');
var server = require('karma').Server;

gulp.task('karma', function() {
	var karmaConfig = config.karma.config;

	// Only run coverage if specified
	if (global.coverage) {
		karmaConfig.reporters.push('coverage');
	}

	// Only run once for builds
	if (global.buildOnly) {
		karmaConfig.singleRun = true;
	}

	return new server(karmaConfig).start();
});
