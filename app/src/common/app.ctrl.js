/**
 * Main Controller
 *
 * This controller is the first to run and is where
 * we define app-wide events.
 */

'use strict';

/**
 * @ngInject
 */
function controller($scope) {

	//@TODO Handle 404s more gracefully
	$scope.$on('$stateNotFound', function(event, unfoundState, fromState) {
		event.preventDefault();
		console.error('404: Page {0} not found. Staying at {1}.'.format(unfoundState.to, fromState.name));
	});

	//@TODO Handle state change errors
}

module.exports = controller;
