'use strict';

var getHtmlLangFramed = require('./framed/getHtmlLang'),
	getHtmlLangLocal = require('./local/getHtmlLang'),
	isFramed = require('./isFramed'),
	isRtlLocal = require('./local/isRtl'),
	isRtlFramed = require('./framed/isRtl'),
	resolveLang = require('./resolveLang');

var exports = {
	getLangTag: function() {
		var getHtmlLang = exports._isFramed() ?
			exports._getHtmlLangFramed : exports._getHtmlLangLocal;
		return getHtmlLang().then(function(value) {
			var langTag = exports._resolveLang(
				value.lang,
				value.fallback
			);
			return langTag;
		});
	},
	isRtl: function() {
		var isRtl = exports._isFramed() ?
			exports._isRtlFramed : exports._isRtlLocal;
		return isRtl();
	},
	_getHtmlLangFramed: getHtmlLangFramed,
	_getHtmlLangLocal: getHtmlLangLocal,
	_isFramed: isFramed,
	_isRtlFramed: isRtlFramed,
	_isRtlLocal: isRtlLocal,
	_resolveLang: resolveLang
};

module.exports = exports;
