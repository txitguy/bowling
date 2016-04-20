'use strict';

var config = require('../config');
var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');

gulp.task('clean', function(cb) {
	return del([
		config.dist.root + '/*',
		'!' + config.dist.root + '/lib',
		'!' + config.dist.root + '/empty'
	]).then(function(paths) {
		gutil.log('Deleted files/folders: ', paths.join(', '));
	});
});
