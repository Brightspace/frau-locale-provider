'use strict';

var expect = require('chai').expect,
	normalizeLangTag = require('../src/normalizeLangTag');

describe('normalizeLangTag', function() {

	[undefined,null,''].forEach(function(langTag, index) {
		it('should return empty for invalid value ' + (index + 1), function() {
			var value = normalizeLangTag(langTag);
			expect(value).to.equal('');
		});
	});

	[' ',' en-US', 'fr-CA ', ' ab-CD '].forEach(function(langTag) {
		it('should trim whitespace: "' + langTag + '"', function() {
			var value = normalizeLangTag(langTag);
			expect(value).to.equal(langTag.trim());
		});
	});

	it('should leave single value locale alone', function() {
		var value = normalizeLangTag('en');
		expect(value).to.equal('en');
	});

	it('should lowercase single value', function() {
		var value = normalizeLangTag('FR');
		expect(value).to.equal('fr');
	});

	it('should uppercase country', function() {
		var value = normalizeLangTag('en-us');
		expect(value).to.equal('en-US');
	});

	it('should lowercase locale and uppercase country', function() {
		var value = normalizeLangTag('AB-cd');
		expect(value).to.equal('ab-CD');
	});

	it('should drop extra tags in the middle', function() {
		var value = normalizeLangTag('ab-cde-fg');
		expect(value).to.equal('ab-FG');
	});

});
