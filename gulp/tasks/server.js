'use strict';

var config = require('../config');
var http = require('http');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('server', function() {

	// Initialize express
	var server = express();

	server.use(express.static(config.dist.root));

	// Serve index.html for all routes to leave routing up to Angular
	server.all('/*', function(req, res) {
		res.sendFile('index.html', {root: 'www'});
	});

	// Start webserver if not already running
	var s = http.createServer(server);
	s.on('error', function(err) {
		if (err.code === 'EADDRINUSE') {
			gutil.log('Development server is already started at port ' + config.serverport);
		}
		else {
			throw err;
		}
	});

	// Start listening
	s.listen(config.serverport);

});
