'use strict';

var supported = require('@brightspace-ui/intl/lib/locale-data/supported.js');

module.exports = {
	defaultLangTag: 'en',
	primary: supported.supportedBaseLocales,
	regions: supported.supportedLocales,
	aliases: {
		'en-AU': 'en-GB'
	}
};
