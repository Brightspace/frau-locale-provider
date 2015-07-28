'use strict';

var Client = require('ifrau').Client,
	expect = require('chai').expect,
	isRtlLocal = require('../src/local/isRtl');

describe('isRtl', function() {

	describe('local', function() {

		beforeEach(function() {
			global.window = {
				D2L: {},
				document: {
					body: {
						dir: 'blah'
					}
				}
			};
		});

		[
			/* window is undefined */
			function() { global.window = undefined; },
			/* window.document is undefined */
			function() { global.window.document = undefined; },
			/* window.document.body is undefined */
			function() { global.window.document.body = undefined; },
		].forEach(function(func,index) {
			it('should return false in error case ' + ( index + 1 ), function(done) {
				func();
				isRtlLocal().then(function(value) {
					expect( value ).to.be.false;
					done();
				});
			});
		});

		it('should return false if dir is empty', function(done) {
			global.window.document.body.dir = '';
			isRtlLocal().then(function(value) {
				expect(value).to.be.false;
				done();
			});
		});

		it('should return false if dir is auto', function(done) {
			global.window.document.body.dir = 'auto';
			isRtlLocal().then(function(value) {
				expect(value).to.be.false;
				done();
			});
		});

		it('should return false if dir is ltr', function(done) {
			global.window.document.body.dir = 'ltr';
			isRtlLocal().then(function(value) {
				expect(value).to.be.false;
				done();
			});
		});

		it('should return true if dir is rtl', function(done) {
			global.window.document.body.dir = 'rtl';
			isRtlLocal().then(function(value) {
				expect(value).to.be.true;
				done();
			});
		});

		it('should be case-insensitive', function(done) {
			global.window.document.body.dir = 'RTL';
			isRtlLocal().then(function(value) {
				expect(value).to.be.true;
				done();
			});
		});

	});

});
