'use strict';

var path = require('path');
var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var tap = require('gulp-tap');
var livereload = require('gulp-livereload');
var gulpif = require('gulp-if');

gulp.task('lint', function() {

	return gulp.src([config.jshint.src, '!app/src/cache/templates.js'])

		// Execute jshint
		.pipe(jshint(config.jshint.config))

		// Execute jscs
		.pipe(jscs({configPath: './gulp/jscs.jscsrc'}))

		// Instead of modifying gulp-jscs-stylish, add tap to set file.base to empty and remove absUrl from path
		// so paths match and errors get concatonated into the same block
		.pipe(tap(function(file) {
			file.base = '';

			var errorList = file.jscs.errors._errorList || file.jscs.errors;
			var absUrl = process.cwd() + '/';
			return errorList.map(function(error) {
				error.filename = error.filename.replace(absUrl, '');
			});
		}))

		// Combine results from jscs and jshint
		.pipe(stylish.combineWithHintResults())

		// Style output for readability
		.pipe(jshint.reporter('jshint-stylish'))

		// Failures
		.pipe(gulpif(global.buildOnly, jshint.reporter('fail')))

		.pipe(livereload());

});