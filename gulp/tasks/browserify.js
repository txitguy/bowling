'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var handleErrors = require('../util/handle-errors');
var ngAnnotate = require('browserify-ngannotate');
var istanbul = require('browserify-istanbul');
var livereload = require('gulp-livereload');

function buildScript(file) {

	// Configure bundler
	var bundler = browserify({
		entries: config.browserify.entries,
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: false
	}, watchify.args);

	// Rebundle on file change in development mode
	if (!global.isProd) {
		bundler = watchify(bundler);
		bundler.on('update', function() {
			rebundle();
		});
	}

	// Configure transforms
	var transforms = [
		// Turn ES6 code into readable vanilla ES5 with source maps
		{t: babelify, options: {presets: ['es2015'], plugins: ['transform-async-to-generator']}},
		// add dependency injection annotations to AngularJS source code, preparing it for minification
		{t: ngAnnotate},
		// browserify fs.readFileSync() static asset inliner
		{t: 'brfs'},
		// transform inline bulk-require calls into statically resolvable require maps
		{t: 'bulkify'}
	];

	if (global.coverage) {
		// register transforms for test coverage
		transforms.push({t: istanbul});
	}

	// Process each transform
	transforms.forEach(function(transform) {
		bundler.transform(transform.t, transform.options || {});
	});

	// Compile javascript source files
	function rebundle() {
		var stream = bundler.bundle();
		var createSourcemap = !global.isProd && config.browserify.sourcemap;

		gutil.log('Rebundle...');

		return stream.on('error', handleErrors)

			// Grab source files
			.pipe(source(file))

			// Start sourcemaps if not in production and they are enabled in the
			// browserify config
			.pipe(gulpif(createSourcemap, buffer()))
			.pipe(gulpif(createSourcemap, sourcemaps.init()))

			// Uglify js if in production mode
			.pipe(gulpif(global.isProd, streamify(uglify({
				compress: {drop_console: true}
			}))))

			// Write the sourcemaps if not in production mode and they are enabled
			// in the browserify config
			.pipe(gulpif(createSourcemap, sourcemaps.write('./')))

			// Write compiled javascript to configured destination
			.pipe(gulp.dest(config.browserify.dest))

			// Reload browser
			.pipe(livereload());

	}

	// Trigger initial bundle
	return rebundle();

}

gulp.task('browserify', function() {

	return buildScript('main.js');

});
