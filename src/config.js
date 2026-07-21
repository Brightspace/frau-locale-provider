'use strict';

var supported = require('@brightspace-ui/intl/lib/locale-data/supported.js');
var normalizeLangTag = require('./normalizeLangTag');

module.exports = {
	defaultLangTag: 'en',
	primary: supported.supportedBaseLocales,
	regions: supported.supportedLocales.map(l => normalizeLangTag(l)),
	aliases: {
		'en-AU': 'en-GB'
	}
};
