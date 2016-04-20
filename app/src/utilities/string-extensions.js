'use strict';

if (typeof String.prototype.format !== 'function') {
	String.prototype.format = function() {
		let args = arguments;
		let argn = arguments.length;
		let toStg = function(val) {
			let vtype = typeof val;
			return vtype === 'string' ?
				val : (vtype === 'number' || vtype === 'boolean' ?
			'' + val : (vtype === 'object' && val !== null && typeof val.toString === 'function' ?
				val.toString() : ''));
		};
		let arg0 = (argn === 1 && args[0] === Object(args[0])) ? args[0] : undefined;
		let fx = (arg0 === undefined) ?
				function(str, i) {
					i = +i;
					return (i >= 0 && i < argn) ? toStg(args[i]) : str;
				} : // "{0}".format("a");
				function(str, k) {
					return (k in arg0) ? toStg(arg0[k]) : str;
				}              // "{key}".format({key: "a"});
			;
		return this.replace(/{([^{}]*)}/g, fx);
	};
}

if (typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		// from: jquery-1.8.3.js
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}