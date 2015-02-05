'use strict';

var defaultLangTag = require('./defaultLangTag');

module.exports = function() {

	if( !window || !window.document ) {
		return defaultLangTag;
	}

	var elems = window.document.getElementsByTagName('html');
	if( elems.length === 0 ) {
		return defaultLangTag;
	}

	var value = elems[0].getAttribute('lang');
	if( value === null ) {
		return defaultLangTag;
	}

	return value;

};
