/**
 * Main Configuration
 *
 * This is the main module configuration
 */

'use strict';

/**
 * @ngInject
 */
function AppConfig($urlRouterProvider, $controllerProvider) {

	// Define the default route
	let defaultRoute = '/home';

	// If no valid route is specified, redirect to the default route
	$urlRouterProvider.otherwise(defaultRoute);

	// Load the main module and register new controllers on the fly
	let app = angular.module(angular.appInfo.appName);
	app._controller = app.controller;
	app.controller = function(name, constructor) {
		$controllerProvider.register(name, constructor);
	};
}

module.exports = AppConfig;