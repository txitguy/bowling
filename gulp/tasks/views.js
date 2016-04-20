'use strict';

var config = require('../config');
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var livereload = require('gulp-livereload');

gulp.task('views', ['pug'], function() {

	// Copy index.html to destination
	gulp.src('app/src/cache/templates/index.html')
		.pipe(gulp.dest(config.dist.root));

	// Process any other view files from app/views
	return gulp.src([config.views.pug.dest + '/**/*.html', '!' + config.views.pug.dest + '/index.html'])
		// Cache in $templateCache
		.pipe(templateCache({
			standalone: true,
			// Get rid of .html file extension
			transformUrl: function(url) {
				return url.replace(/\.html$/, '')
			}
		}))

		// Save cached file
		.pipe(gulp.dest(config.views.dest))

		// Reload browser
		.pipe(livereload());

});
