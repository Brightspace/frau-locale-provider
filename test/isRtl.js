'use strict';

var expect = require('chai').expect,
	isRtl = require('../src/isRtl');

describe('isRtl', function() {

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
		it('should return false in error case ' + ( index + 1 ), function() {
			func();
			var value = isRtl();
			expect( value ).to.be.false;
		});
	});

	it('should return false if dir is empty', function() {
		global.window.document.body.dir = '';
		var value = isRtl();
		expect(value).to.be.false;
	});

	it('should return false if dir is auto', function() {
		global.window.document.body.dir = 'auto';
		var value = isRtl();
		expect(value).to.be.false;
	});

	it('should return false if dir is ltr', function() {
		global.window.document.body.dir = 'ltr';
		var value = isRtl();
		expect(value).to.be.false;
	});

	it('should return true if dir is rtl', function() {
		global.window.document.body.dir = 'rtl';
		var value = isRtl();
		expect(value).to.be.true;
	});

	it('should be case-insensitive', function() {
		global.window.document.body.dir = 'RTL';
		var value = isRtl();
		expect(value).to.be.true;
	});

});
