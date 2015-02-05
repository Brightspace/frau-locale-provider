'use strict';

var getHtmlLang = require('./getHtmlLang'),
	resolveLang = require('./resolveLang');

function get() {
	var langTag = exports._getHtmlLang();
	langTag = exports._resolveLang( langTag );
	return langTag;
}

var exports = {
	get: get,
	_getHtmlLang: getHtmlLang,
	_resolveLang: resolveLang
};

module.exports = exports;
