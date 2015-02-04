'use strict';

var expect = require('chai').expect,
	normalizeLangCode = require('../lib/normalizeLangCode');

describe('normalizeLangCode', function() {

	[undefined,null,''].forEach(function(langCode, index) {
		it('should return empty for invalid value ' + (index + 1), function() {
			var value = normalizeLangCode(langCode);
			expect(value).to.equal('');
		});
	});

	[' ',' en-US', 'fr-CA ', ' ab-CD '].forEach(function(langCode) {
		it('should trim whitespace: "' + langCode + '"', function() {
			var value = normalizeLangCode(langCode);
			expect(value).to.equal(langCode.trim());
		});
	});

	it('should leave single value locale alone', function() {
		var value = normalizeLangCode('en');
		expect(value).to.equal('en');
	});

	it('should lowercase single value', function() {
		var value = normalizeLangCode('FR');
		expect(value).to.equal('fr');
	});

	it('should uppercase country', function() {
		var value = normalizeLangCode('en-us');
		expect(value).to.equal('en-US');
	});

	it('should lowercase locale and uppercase country', function() {
		var value = normalizeLangCode('AB-cd');
		expect(value).to.equal('ab-CD');
	});

	it('should drop extra tags in the middle', function() {
		var value = normalizeLangCode('ab-cde-fg');
		expect(value).to.equal('ab-FG');
	});

});
