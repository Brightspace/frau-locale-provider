'use strict';

module.exports = function(langCode) {

	if( langCode === undefined || langCode === null ) {
		return '';
	}

	langCode = langCode.trim().toLowerCase();

	var parts = langCode.split('-');
	if( parts.length < 2 ) {
		return langCode;
	}

	var langTag = parts[0];
	var country = parts[parts.length-1].toUpperCase();

	return langTag + '-' + country;

};
