'use strict';

var config = require('../src/config'),
	expect = require('chai').expect,
	getHtmlLang = require('../src/getHtmlLang'),
	sinon = require('sinon');

describe('getHtmlLang', function() {

	var getElementsByTagName, getAttribute;

	beforeEach(function() {

		getAttribute = sinon.stub();

		getElementsByTagName = sinon.stub()
			.returns([{ getAttribute: getAttribute }]);

		global.window = {
			document: {
				body: {
					dir: 'blah'
				},
				getElementsByTagName: getElementsByTagName
			}
		};

	});

	[
	/* window is undefined */
	function() { global.window = undefined; },
	/* window.document is undefined */
	function() { global.window.document = undefined; },
	/* no HTML elements */
	function() {
		global.window.document.getElementsByTagName = sinon.stub()
		.returns([]);
	},
	/* no lang attribute on HTML element */
	function() {
		global.window.document.getElementsByTagName = sinon.stub()
			.returns([{getAttribute: sinon.stub().returns(null)}]);
	}
	].forEach(function(func,index) {
		it('should return default ' + ( index + 1 ), function() {
			func();
			var value = getHtmlLang();
			expect(value.lang).to.equal(config.defaultLangTag);
		});
	});

	it('should return HTML element lang attribute value', function() {
		getAttribute.withArgs('lang').returns('ab-CD');
		var value = getHtmlLang();
		expect(getElementsByTagName.calledWith('html')).to.be.true;
		expect(getAttribute.calledWith('lang')).to.be.true;
		expect(value.lang).to.equal('ab-CD');
	});

	it('should return null fallback when no data attribute', function() {
		getAttribute.withArgs('data-lang-default').returns(null);
		var value = getHtmlLang();
		expect(value.fallback).to.not.be.defined;
	});

	it('should return fallback value', function() {
		getAttribute.withArgs('data-lang-default').returns('de-FG');
		var value = getHtmlLang();
		expect(value.fallback).to.equal('de-FG');
	});

});
