'use strict';

/**
 * @ngInject
 */
let config = function config($stateProvider) {
	$stateProvider
		.state('stats', {
			url: '/stats',
			controller: 'StatsController',
			controllerAs: 'ctrl',
			templateProvider(Template) {
				return Template.getTemplate('stats/index');
			},
			data: {pageTitle: 'Bowling Stats'}
		})
	;
};

module.exports = config;
