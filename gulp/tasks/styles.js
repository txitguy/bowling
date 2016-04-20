'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var handleErrors = require('../util/handle-errors');
var config = require('../config');
var minifyCss = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {

	// any css processors for postcss
	var processors = [
		autoprefixer({browsers: ['last 2 versions'], cascade: false})
	];

	return gulp.src(config.styles.src)

		// Build sourcemaps if in development mode
		.pipe(gulpif(!global.isProd, sourcemaps.init()))

		// Run sass
		.pipe(sass())

		// Handle errors
		.on('error', handleErrors)

		// Post-css processors such as autoprefixing css.
		// Necessary for sourcemaps and autoprefixing, amoung other processors, to work together.
		// https://github.com/sindresorhus/gulp-autoprefixer/issues/55
		.pipe(postcss(processors))

		// Write sourcemaps if in development mode
		.pipe(gulpif(!global.isProd, sourcemaps.write()))

		// Save file
		//.pipe(gulp.dest(config.styles.dest))

		// Minify if in production
		.pipe(gulpif(global.isProd, minifyCss()))

		// Rename the minified css if in production
		.pipe(gulpif(global.isProd, rename({extname: '.min.css'})))

		// Save the minified css
		.pipe(gulp.dest(config.styles.dest))

		.pipe(livereload());

});
