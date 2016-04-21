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
		.state('creategame', {
			url: '/games/create',
			controller: 'CreateController',
			controllerAs: 'ctrl',
			templateProvider(Template) {
				return Template.getTemplate('games/create');
			},
			data: {pageTitle: 'Create Game'}
		})
	;
};

module.exports = config;
