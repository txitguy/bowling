'use strict';

var config = require('../config');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', ['server'], function() {
	livereload.listen({});
	gulp.watch(config.jshint.src, ['lint']);
	gulp.watch(config.styles.src, ['styles']);
	gulp.watch(config.images.src, ['images']);
	gulp.watch(config.views.watch, ['views']);
});
