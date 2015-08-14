'use strict';

module.exports = function() {
	if(!window || !window.document || !window.document.body) {
		return false;
	}
	var value = (window.document.body.dir.toLowerCase() === 'rtl');
	return value;
};
