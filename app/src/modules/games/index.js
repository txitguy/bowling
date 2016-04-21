'use strict';

module.exports = angular.mod('games', ['Template'])
	.config(require('./games.cfg'))
	.controller('GamesController', require('./controllers/games.ctrl'))
	.controller('CreateController', require('./controllers/create.ctrl'))
	.directive('scorecard', require('../../common/directives/scorecord.directive'))
;
