'use strict';

/**
 * @ngInject
 */
let config = function config($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateProvider(Template) {
				return Template.getTemplate('home/index');
			},
			data: {pageTitle: 'Home Page'}
		})
	;
};

module.exports = config;
