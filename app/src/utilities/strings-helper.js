'use strict';

let stringsHelper = function stringsHelper(Strings) {
	angular.stringsGet = function(key) {
		return angular.hashGet(Strings, '{0}'.format(key), '');
	};
};

module.exports = stringsHelper;