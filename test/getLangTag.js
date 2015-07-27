'use strict';

var expect = require('chai').expect,
	getLangTag = require('../src/getLangTag'),
	sinon = require('sinon');

describe('getLangTag', function() {

	var getHtmlLang, resolveLang;

	beforeEach(function() {
		getHtmlLang = sinon.stub(getLangTag, '_getHtmlLang')
			.returns({lang: 'ab-CD'});
		resolveLang = sinon.stub(getLangTag, '_resolveLang');
	});

	afterEach(function() {
		getHtmlLang.restore();
		resolveLang.restore();
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
