'use strict';

module.exports = function(langTag) {

	if( langTag === undefined || langTag === null ) {
		return '';
	}

	langTag = langTag.trim().toLowerCase();

	var subtags = langTag.split('-');
	if( subtags.length < 2 ) {
		return langTag;
	}

	var langSubtag = subtags[0];
	var regionSubtag = subtags[subtags.length-1].toUpperCase();

	return langSubtag + '-' + regionSubtag;

};
