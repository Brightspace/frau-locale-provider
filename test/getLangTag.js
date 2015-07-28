'use strict';

var expect = require('chai').expect,
	getLangTag = require('../src/getLangTag'),
	Q = require('q'),
	sinon = require('sinon');

describe('getLangTag', function() {

	var getHtmlLang, resolveLang;

	beforeEach(function() {
		global.window = { D2L: {} };
		getHtmlLang = sinon.stub(getLangTag, '_getHtmlLangLocal')
			.returns(Q.all([{lang: 'ab-CD', fallback: 'ef-GH'}]));
		resolveLang = sinon.stub(getLangTag, '_resolveLang');
	});

	afterEach(function() {
		getHtmlLang.restore();
		resolveLang.restore();
	});

	it('should get language code off HTML element', function(done) {
		getLangTag.get().then(function() {
			expect(getHtmlLang.calledOnce).to.be.true;
			done();
		});
	});

	it('should resolve the language', function(done) {
		getLangTag.get().then(function() {
			expect(resolveLang.calledOnce).to.be.true;
			done();
		});
	});

});
