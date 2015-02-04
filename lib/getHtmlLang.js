'use strict';

var defaultLanguageCode = require('./defaultLangCode');

module.exports = function() {

	if( !window || !window.document ) {
		return defaultLanguageCode;
	}

	var elems = window.document.getElementsByTagName('html');
	if( elems.length === 0 ) {
		return defaultLanguageCode;
	}

	var languageCode = elems[0].getAttribute('lang');
	if( languageCode === null ) {
		return defaultLanguageCode;
	}

	return languageCode;

};
