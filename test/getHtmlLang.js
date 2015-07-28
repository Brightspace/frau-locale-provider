'use strict';

var config = require('../src/config'),
	expect = require('chai').expect,
	getHtmlLangLocal = require('../src/local/getHtmlLang'),
	sinon = require('sinon');

describe('getHtmlLang', function() {

	describe('local', function() {

		var getElementsByTagName, getAttribute;

		beforeEach(function() {

			getAttribute = sinon.stub();

			getElementsByTagName = sinon.stub()
				.returns([{ getAttribute: getAttribute }]);

			global.window = {
				D2L: {},
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
			it('should return default ' + ( index + 1 ), function(done) {
				func();
				getHtmlLangLocal().then(function(value) {
					expect(value.lang).to.equal(config.defaultLangTag);
					done();
				});
			});
		});

		it('should return HTML element lang attribute value', function(done) {
			getAttribute.withArgs('lang').returns('ab-CD');
			getHtmlLangLocal().then(function(value) {
				expect(getElementsByTagName.calledWith('html')).to.be.true;
				expect(getAttribute.calledWith('lang')).to.be.true;
				expect(value.lang).to.equal('ab-CD');
				done();
			});
		});

		it('should return null fallback when no data attribute', function(done) {
			getAttribute.withArgs('data-lang-default').returns(null);
			getHtmlLangLocal().then(function(value) {
				expect(value.fallback).to.not.be.defined;
				done();
			});
		});

		it('should return fallback value', function(done) {
			getAttribute.withArgs('data-lang-default').returns('de-FG');
			getHtmlLangLocal().then(function(value) {
				expect(value.fallback).to.equal('de-FG');
				done();
			});
		});

	});

});
