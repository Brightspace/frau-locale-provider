'use strict';

var config = require('./config');

module.exports = function() {

	if( !window || !window.document ) {
		return config.defaultLangTag;
	}

	var elems = window.document.getElementsByTagName('html');
	if( elems.length === 0 ) {
		return config.defaultLangTag;
	}

	var value = elems[0].getAttribute('lang');
	if( value === null ) {
		return config.defaultLangTag;
	}

	return value;

};
