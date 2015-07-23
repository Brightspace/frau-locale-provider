'use strict';

var getHtmlLang = require('./getHtmlLang'),
	resolveLang = require('./resolveLang');

function get() {
	var value = exports._getHtmlLang();
	var langTag = exports._resolveLang( value.lang, value.fallback );
	return langTag;
}

var exports = {
	get: get,
	_getHtmlLang: getHtmlLang,
	_resolveLang: resolveLang
};

module.exports = exports;
