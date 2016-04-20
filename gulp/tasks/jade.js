'use strict';

var config = require('../config');
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function() {

	// Copy html files to the cache since they don't need to be compiled
	gulp.src(config.views.src)
		.pipe(gulp.dest(config.views.pug.dest));

	// Set pretty to true if dev, false if prod
	config.views.pug.options.pretty = !global.isProd;

	// Compile pug files and save
	return gulp.src(config.views.pug.src)
		.pipe(pug(config.views.pug.options))
		.pipe(gulp.dest(config.views.pug.dest));

});
