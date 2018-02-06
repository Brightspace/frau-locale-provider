'use strict';

var expect = require('chai').expect,
	localeProvider = require('../'),
	sinon = require('sinon');

var htmlLangValue = { lang: 'ab-CD', fallback: 'ef-GH'};

describe('localeProvider', function() {

	var getHtmlLang, resolveLang;

	beforeEach(function() {
		getHtmlLang = sinon.stub(localeProvider, '_getHtmlLang')
			.returns(htmlLangValue);
		resolveLang = sinon.stub(localeProvider, '_resolveLang').returns(4);
	});

	afterEach(function() {
		getHtmlLang.restore();
		resolveLang.restore();
	});

	describe('getLangTag', function() {

		it('should have getLangTag defined', function() {
			expect(localeProvider.getLangTag).to.not.be.undefined;
		});

		it('should call getHtmlLang', function() {
			localeProvider.getLangTag();
			expect(getHtmlLang.calledOnce).to.be.true;
		});

		it('should resolve value', function() {
			var value = localeProvider.getLangTag();
			expect(resolveLang.calledOnce).to.be.true;
			expect(value).to.eql(4);
		});

	});

	describe('isRtl', function() {

		it('should have isRtl defined', function() {
			expect(localeProvider.isRtl).to.not.be.undefined;
		});

	});

});
