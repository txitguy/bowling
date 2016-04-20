'use strict';

// time keeper
angular.epoch = function() {
	let nd = (new Date).getTime();  // jshint ignore:line

	// lower resolution to allow tests to pass
	if (angular.mock) {
		nd = Math.floor(nd / 1E6) * 1E6;
	}

	return nd;
};

// parse ISO date
angular.dateParse = function(input) {
	let newDate = null;
	let isoFormat = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/;
	if (input) {
		if (input instanceof Date) {
			newDate = input;
		}
		else {
			let parts = isoFormat.exec('' + input);
			if (parts) {
				newDate = new Date(+parts[1], +parts[2] - 1, +parts[3], +parts[4], +parts[5], +parts[6]);
			}
			if (!newDate) {
				newDate = new Date(input);
			}
			if (isNaN(newDate.getTime())) {
				newDate = null;
			}
		}
	}
	return newDate;
};

// http://www.samuellevy.com/blog/2009/10/boolval-the-missing-function
/* depends on jq inArray
 angular.boolVal = function(tf) {
 tf = (''+tf).toLowerCase();
 return (-1 === angular.element.inArray(tf, ['', 'false', 'no', 'n', '0', '-0', 'off', 'null', 'undefined']));
 };
 */

// used to find values in a hash e.g. "envelope.payload.failed"
angular.hashGet = function(hash, key, defaultResult) {
	let current = hash;

	let keys = '{0}'.format(key).split('.');
	for (let i = 0, n = keys.length; i < n; i++) {
		if ((angular.isObject(current) || angular.isFunction(current)) && keys[i] !== '' && typeof current[keys[i]] !== 'undefined') {
			current = current[keys[i]];
		}
		else {
			current = hash;
			break;
		}
	}
	return current === hash ? defaultResult : current;
};

// used to find item in array
angular.arrayFind = function(collection, callback) {
	for (let i = 0, n = collection.length; i < n; i++) {
		let value = collection[i];
		if (callback(value, i, collection)) {
			return value;
		}
	}
};

// used to replace an item in an array, returns replaced item
angular.arrayReplace = function(collection, newItem, callback) {
	for (let i = 0, n = collection.length; i < n; i++) {
		let value = collection[i];
		if (callback(value, i, collection)) {
			collection[i] = newItem;
			return value;
		}
	}
};