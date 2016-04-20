'use strict';

/**
 * @ngInject
 */
let config = function config($stateProvider) {
	$stateProvider
		.state('games', {
			url: '/games',
			controller: 'GamesController',
			controllerAs: 'ctrl',
			templateProvider(Template) {
				return Template.getTemplate('games/index');
			},
			data: {pageTitle: 'Bowling Games'}
		})
	;
};

module.exports = config;
