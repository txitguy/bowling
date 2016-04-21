'use strict';

module.exports = angular.mod('games', ['Template'])
	.config(require('./games.cfg'))
	.controller('GamesController', require('./games.ctrl'))
	.directive('scorecard', require('../../common/directives/scorecord.directive'))
;
