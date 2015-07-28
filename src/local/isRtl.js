'use strict';

var Q = require('q');

module.exports = function() {
	return Q.fcall(function() {
		if(!window || !window.document || !window.document.body) {
			return false;
		}
		var value = (window.document.body.dir.toLowerCase() === 'rtl');
		return value;
	});
};
