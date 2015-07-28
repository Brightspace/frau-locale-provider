'use strict';

var isFramed = require('./isFramed'),
	getHtmlLangFramed = require('./framed/getHtmlLang'),
	getHtmlLangLocal = require('./local/getHtmlLang'),
	resolveLang = require('./resolveLang');

function get() {
	var getHtmlLang = isFramed() ? exports._getHtmlLangFramed
	 	: exports._getHtmlLangLocal;
	return getHtmlLang().then(function(value) {
		var langTag = exports._resolveLang( value.lang, value.fallback );
		return langTag;
	});
}

var exports = {
	get: get,
	_getHtmlLangFramed: getHtmlLangFramed,
	_getHtmlLangLocal: getHtmlLangLocal,
	_resolveLang: resolveLang
};

module.exports = exports;
