'use strict';

var getHtmlLang = require('./getHtmlLang'),
	isRtl = require('./isRtl'),
	resolveLang = require('./resolveLang');

var exports = {
	getLangTag: function() {
		var value = exports._getHtmlLang();
		var langTag = exports._resolveLang(
			value.lang,
			value.fallback
		);
		return langTag;
	},
	isRtl: isRtl,
	_getHtmlLang: getHtmlLang,
	_resolveLang: resolveLang
};

module.exports = exports;
