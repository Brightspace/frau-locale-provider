'use strict';

var defaultLangCode = require('./defaultLangCode'),
	normalizeLangCode = require('./normalizeLangCode');

var locales = [
	'ar',
	'en',
	'es',
	'fr',
	'id',
	'ja',
	'ko',
	'pt',
	'sv',
	'tr',
	'zh'
];

var countries = [
	'ar-SA',
	'en-CA',
	'en-GB',
	'en-US',
	'es-MX',
	'fr-CA',
	'id-ID',
	'ko-KR',
	'pt-BR',
	'sv-SE',
	'tr-TR',
	'zh-CN',
	'zh-TW',
];

module.exports = function(langCode) {

	langCode = normalizeLangCode(langCode);

	if( countries.indexOf(langCode) > -1 ) {
		return langCode;
	}

	if( locales.indexOf(langCode) > -1 ) {
		return langCode;
	}

	var parts = langCode.split('-');
	if( parts.length > 0 && locales.indexOf(parts[0]) > -1 ) {
		return parts[0];
	}

	return defaultLangCode;

};
