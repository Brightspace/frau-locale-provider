'use strict';

var defaultLangTag = require('./defaultLangTag'),
	normalizeLangTag = require('./normalizeLangTag');

var primaryLanguages = [
	'ar',
	'en',
	'es',
	'fr',
	'ja',
	'ko',
	'pt',
	'sv',
	'tr',
	'zh'
];

var regions = [
	'ar-SA',
	'en-CA',
	'en-GB',
	'en-US',
	'es-MX',
	'fr-CA',
	'ko-KR',
	'pt-BR',
	'sv-SE',
	'tr-TR',
	'zh-CN',
	'zh-TW',
];

var fallbacks = {
	'en-AU': 'en-GB'
};

module.exports = function(langTag) {

	langTag = normalizeLangTag(langTag);

	if( regions.indexOf(langTag) > -1 ) {
		return langTag;
	}

	if(fallbacks[langTag] !== undefined) {
		return fallbacks[langTag];
	}

	if( primaryLanguages.indexOf(langTag) > -1 ) {
		return langTag;
	}

	var subtags = langTag.split('-');
	if( subtags.length > 0 && primaryLanguages.indexOf(subtags[0]) > -1 ) {
		return subtags[0];
	}

	return defaultLangTag;

};
