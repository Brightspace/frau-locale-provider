'use strict';

var getHtmlLang = require('./getHtmlLang'),
	resolveLang = require('./resolveLang');

function get() {
	var langCode = exports._getHtmlLang();
	langCode = exports._resolveLang( langCode );
	return langCode;
}

var exports = {
	get: get,
	_getHtmlLang: getHtmlLang,
	_resolveLang: resolveLang
};

module.exports = exports;
