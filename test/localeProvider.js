'use strict';

var expect = require('chai').expect,
	ifrau = require('ifrau'),
	localeProvider = require('../'),
	Q = require('q'),
	sinon = require('sinon');

var htmlLangValue = Q.fcall(function() {
	return { lang: 'ab-CD', fallback: 'ef-GH'};
});

describe('localeProvider', function() {

	var getHtmlLangFramed,
	 	getHtmlLangLocal,
		isFramed,
		isRtlFramed,
		isRtlLocal,
		resolveLang;

	beforeEach(function() {
		getHtmlLangFramed = sinon.stub(localeProvider, '_getHtmlLangFramed')
			.returns(htmlLangValue);
		getHtmlLangLocal = sinon.stub(localeProvider, '_getHtmlLangLocal')
			.returns(htmlLangValue);
		isFramed = sinon.stub(localeProvider, '_isFramed');
		isRtlFramed = sinon.stub(localeProvider, '_isRtlFramed');
		isRtlLocal = sinon.stub(localeProvider, '_isRtlLocal');
		resolveLang = sinon.stub(localeProvider, '_resolveLang').returns(4);
	});

	afterEach(function() {
		getHtmlLangFramed.restore();
		getHtmlLangLocal.restore();
		isFramed.restore();
		isRtlFramed.restore();
		isRtlLocal.restore();
		resolveLang.restore();
	});

	describe('getLangTag', function() {

		it('should have getLangTag defined', function() {
			expect(localeProvider.getLangTag).to.be.defined;
		});

		it('should call local getLangTag', function() {
			isFramed.returns(false);
			localeProvider.getLangTag();
			expect(getHtmlLangLocal.calledOnce).to.be.true;
			expect(getHtmlLangFramed.notCalled).to.be.true;
		});

		it('should call framed getLangTag', function() {
			isFramed.returns(true);
			localeProvider.getLangTag();
			expect(getHtmlLangLocal.notCalled).to.be.true;
			expect(getHtmlLangFramed.calledOnce).to.be.true;
		});

		it('should resolve value', function(done) {
			isFramed.returns(false);
			localeProvider.getLangTag().then(function(val) {
				expect(resolveLang.calledOnce).to.be.true;
				expect(val).to.eql(4);
				done();
			});
		});

	});

	describe('isRtl', function() {

		it('should have isRtl defined', function() {
			expect(localeProvider.isRtl).to.be.defined;
		});

		it('should call local isRtl', function() {
			isFramed.returns(false);
			localeProvider.isRtl();
			expect(isRtlLocal.calledOnce).to.be.true;
			expect(isRtlFramed.notCalled).to.be.true;
		});

		it('should call framed isRtl', function() {
			isFramed.returns(true);
			localeProvider.isRtl();
			expect(isRtlLocal.notCalled).to.be.true;
			expect(isRtlFramed.calledOnce).to.be.true;
		});

	});

});
