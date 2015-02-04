'use strict';

module.exports = function() {

	if( !window || !window.document || !window.document.body ) {
		return false;
	}

	var dir = window.document.body.dir;

	var value = ( dir === 'rtl' );
	return value;

};
