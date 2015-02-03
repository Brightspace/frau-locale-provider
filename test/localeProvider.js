'use strict';

var expect = require('chai').expect,
	localeProvider = require('../'),
	sinon = require('sinon');

describe('locale-provider', function() {

	beforeEach(function() {
		global.window = {
			document: {
				body: {
					dir: 'blah'
				}
			}
		};
	});

	describe('getLanguageCode', function() {

		var getElementsByTagName, getAttribute;

		beforeEach(function() {

			getAttribute = sinon.stub().returns('ab-cd');

			getElementsByTagName = sinon.stub()
				.returns([{ getAttribute: getAttribute }]);

			global.window.document.getElementsByTagName = getElementsByTagName;

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
				var value = localeProvider.getLanguageCode();
				expect(value).to.equal(localeProvider._defaultLanguageCode);
			});
		});

		it('should return HTML element lang attribute value', function() {
			var value = localeProvider.getLanguageCode();
			expect(getElementsByTagName.calledWith('html')).to.be.true;
			expect(getAttribute.calledWith('lang')).to.be.true;
			expect(value).to.equal('ab-cd');
		});

	});

	describe('isRtl', function() {

		var getAttribute;

		[
		/* window is undefined */
		function() { global.window = undefined; },
		/* window.document is undefined */
		function() { global.window.document = undefined; },
		/* window.document.body is undefined */
		function() { global.window.document.body = undefined; },
		].forEach(function(func,index) {
			it('should return false in error case ' + ( index + 1 ), function() {
				func();
				var value = localeProvider.isRtl();
				expect( value ).to.be.false;
			});
		});

		it('should return false if dir is empty', function() {
			global.window.document.body.dir = '';
			var value = localeProvider.isRtl();
			expect(value).to.be.false;
		});

		it('should return false if dir is auto', function() {
			global.window.document.body.dir = 'auto';
			var value = localeProvider.isRtl();
			expect(value).to.be.false;
		});

		it('should return false if dir is ltr', function() {
			global.window.document.body.dir = 'ltr';
			var value = localeProvider.isRtl();
			expect(value).to.be.false;
		});

		it('should return true if dir is rtl', function() {
			global.window.document.body.dir = 'rtl';
			var value = localeProvider.isRtl();
			expect(value).to.be.true;
		});

	});

});
