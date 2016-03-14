'use strict';

var getHtmlLang = require('./getHtmlLang'),
	isRtl = require('./isRtl'),
	resolveLang = require('./resolveLang');

module.exports = {
	getLangTag: function() {
		var value = module.exports._getHtmlLang();
		var langTag = module.exports._resolveLang(
			value.lang,
			value.fallback
		);
		return langTag;
	},
	isRtl: isRtl,
	_getHtmlLang: getHtmlLang,
	_resolveLang: resolveLang
};
