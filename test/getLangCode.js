'use strict';

var expect = require('chai').expect,
	getLangCode = require('../lib/getLangCode'),
	sinon = require('sinon');

describe('getLangCode', function() {

	var getHtmlLang, resolveLang;

	beforeEach(function() {
		getHtmlLang = getLangCode._getHtmlLang;
		resolveLang = getLangCode._resolveLang;
		getLangCode._getHtmlLang = sinon.spy();
		getLangCode._resolveLang = sinon.spy();
	});

	afterEach(function() {
		getLangCode._getHtmlLang = getHtmlLang;
		getLangCode._resolveLang = resolveLang;
	});

	it('should get language code off HTML element', function() {
		getLangCode.get();
		expect(getLangCode._getHtmlLang.calledOnce).to.be.true;
	});

	it('should resolve the language', function() {
		getLangCode.get();
		expect(getLangCode._resolveLang.calledOnce).to.be.true;
	});

});
