/**
 * Bootstrap
 *
 * This is the application bootstrap. It loads required
 * modules and initializes the application.
 */

'use strict';

// Angular
let angular = require('angular');
require('angular-ui-router');

// Polyfill for es6
require('babel-polyfill');

// Utilities
window._ = require('lodash');
const bulk = require('bulk-require');
require('./utilities/string-extensions');
require('./utilities/angular-helpers');

// Get dependencies
require('./cache/templates');
require('./common/template');

// Application name and dependencies to inject to core
angular.appInfo = {
	appName: 'app',
	dependencies: [
		'ui.router',
		'templates',
		'Template'
	]
};

// Create application
const app = angular.module(angular.appInfo.appName, angular.appInfo.dependencies)

	// Application configuration
	.config(require('./common/config'))

	// Application string literals
	.value('Strings', require('./common/strings'))

	.constant('_', window._)
	.constant('storage', window.storage)

	// Application Settings
	.constant('Settings', require('./common/constants'))

	.run(require('./utilities/strings-helper'))

	// Define main application controller
	.controller('AppController', require('./common/app.ctrl'));

// Rewrite angular.module to dynamically load modules - rewriting angular.module breaks angular.mocks.module adding ngMocks dependency
angular.mod = function() {
	return app;
};

// Require filters and modules
bulk(__dirname, ['common/filters/*.js', 'modules/**/index.js']);
