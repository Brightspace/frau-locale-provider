'use strict';

var expect = require('chai').expect,
	getLangTag = require('../lib/getLangTag'),
	sinon = require('sinon');

describe('getLangCode', function() {

	var getHtmlLang, resolveLang;

	beforeEach(function() {
		getHtmlLang = getLangTag._getHtmlLang;
		resolveLang = getLangTag._resolveLang;
		getLangTag._getHtmlLang = sinon.spy();
		getLangTag._resolveLang = sinon.spy();
	});

	afterEach(function() {
		getLangTag._getHtmlLang = getHtmlLang;
		getLangTag._resolveLang = resolveLang;
	});

	it('should get language code off HTML element', function() {
		getLangTag.get();
		expect(getLangTag._getHtmlLang.calledOnce).to.be.true;
	});

	it('should resolve the language', function() {
		getLangTag.get();
		expect(getLangTag._resolveLang.calledOnce).to.be.true;
	});

});
