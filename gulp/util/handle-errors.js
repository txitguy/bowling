'use strict';

var notify = require('gulp-notify');

module.exports = function(error) {

	if (!global.isProd) {
		// Development mode - log error, notify and continue building broken code
		var args = Array.prototype.slice.call(arguments);

		// Send error to notification center with gulp-notify
		notify.onError({
			title: 'Compile Error',
			message: '<%= error.message %>'
		}).apply(this, args);

		// Keep gulp from hanging on this task
		this.emit('end');

	} else {
		// Production mode - log error and exit
		// Log the error and stop the process
		// to prevent broken code from building
		console.log(error);
		process.exit(1);
	}

};
