'use strict';

var expect = require('chai').expect,
	config = require('../src/config'),
	resolveLang = require('../src/resolveLang');

describe('resolveLang', function() {

	it('should default to en', function() {
		expect(config.defaultLangTag).to.equal('en');
	});

	it('should return input if matches supported country', function() {
		var value = resolveLang('es-MX');
		expect(value).to.equal('es-MX');
	});

	it('should be case-insensitive when matching country', function() {
		var value = resolveLang('sv-se');
		expect(value).to.equal('sv-SE');
	});

	it('should be case-insensitive when matching language', function() {
		var value = resolveLang('SV-SE');
		expect(value).to.equal('sv-SE');
	});

	it('should fall back to base language for unknown country', function() {
		var value = resolveLang('en-CD');
		expect(value).to.equal('en');
	});

	it('should alias en-GB for en-AU', function() {
		var value = resolveLang('en-AU');
		expect(value).to.equal('en-GB');
	});

	it('should return base language if only language specified', function() {
		var value = resolveLang('fr');
		expect(value).to.equal('fr');
	});

	it('should treat base language as case-insensitive', function() {
		var value = resolveLang('FR');
		expect(value).to.equal('fr');
	});

	it('should return default if no match found', function() {
		var value = resolveLang('ab-CD');
		expect(value).to.equal(config.defaultLangTag);
	});

	it('should return fallback if no match found', function() {
		var value = resolveLang('ab-CD', 'fr-CA');
		expect(value).to.equal('fr-CA');
	});

	it('should return default if input and fallback do not match', function() {
		var value = resolveLang('ab-CD', 'ef-GH');
		expect(value).to.equal(config.defaultLangTag);
	});

	it('should return default for no longer supported id-ID', function() {
		var value = resolveLang('id-ID');
		expect(value).to.equal(config.defaultLangTag);
	});

});
