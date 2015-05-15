'use strict';

var config = require('./config'),
	normalizeLangTag = require('./normalizeLangTag');

module.exports = function(langTag) {

	langTag = normalizeLangTag(langTag);

	if( config.regions.indexOf(langTag) > -1 ) {
		return langTag;
	}

	if(config.aliases[langTag] !== undefined) {
		return config.aliases[langTag];
	}

	if( config.primary.indexOf(langTag) > -1 ) {
		return langTag;
	}

	var subtags = langTag.split('-');
	if( subtags.length > 0 && config.primary.indexOf(subtags[0]) > -1 ) {
		return subtags[0];
	}

	return config.defaultLangTag;

};
