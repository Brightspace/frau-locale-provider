'use strict';

var expect = require('chai').expect,
	defaultLangCode = require('../lib/defaultLangCode'),
	resolveLangCode = require('../lib/resolveLang');

describe('resolveLang', function() {

	it('should return input if matches supported country', function() {
		var value = resolveLangCode('es-MX');
		expect(value).to.equal('es-MX');
	});

	it('should be case-insensitive when matching country', function() {
		var value = resolveLangCode('sv-se');
		expect(value).to.equal('sv-SE');
	});

	it('should be case-insensitive when matching language', function() {
		var value = resolveLangCode('SV-SE');
		expect(value).to.equal('sv-SE');
	});

	it('should fall back to base language for unknown country', function() {
		var value = resolveLangCode('en-AU');
		expect(value).to.equal('en');
	});

	it('should return base language if only language specified', function() {
		var value = resolveLangCode('fr');
		expect(value).to.equal('fr');
	});

	it('should treat base language as case-insensitive', function() {
		var value = resolveLangCode('FR');
		expect(value).to.equal('fr');
	});

	it('should return default if no match found', function() {
		var value = resolveLangCode('ab-CD');
		expect(value).to.equal(defaultLangCode);
	});

});
