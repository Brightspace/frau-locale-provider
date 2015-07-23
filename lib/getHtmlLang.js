'use strict';

var config = require('./config');

module.exports = function() {

	if( !window || !window.document ) {
		return { lang: config.defaultLangTag };
	}

	var elems = window.document.getElementsByTagName('html');
	if( elems.length === 0 ) {
		return { lang: config.defaultLangTag };
	}

	var lang = elems[0].getAttribute('lang');
	if( lang === null ) {
		return { lang: config.defaultLangTag };
	}

	var fallback = elems[0].getAttribute('data-lang-default');

	var value = {
		lang: lang
	};
	if(fallback !== null) {
		value.fallback = fallback;
	}
	return value;

};
