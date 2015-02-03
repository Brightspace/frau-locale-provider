'use strict';

var defaultLanguageCode = 'en-us';

module.exports.getLanguageCode = function() {

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

module.exports.isRtl = function() {

	if( !window || !window.document || !window.document.body ) {
		return false;
	}

	var dir = window.document.body.dir;

	var isRtl = ( dir === 'rtl' );
	return isRtl;
	
};

module.exports._defaultLanguageCode = defaultLanguageCode;
