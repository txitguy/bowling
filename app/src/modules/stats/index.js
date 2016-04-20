'use strict';

module.exports = angular.mod('stats', ['Template'])
	.config(require('./stats.cfg'))
	.controller('StatsController', require('./stats.ctrl'))
;
