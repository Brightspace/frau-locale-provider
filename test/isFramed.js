'use strict';

var expect = require('chai').expect,
	isFramed = require('../src/isFramed');

describe('isFramed', function() {

	beforeEach(function() {
		global.window = {};
	});

	it('should return true if D2L is undefined', function() {
		var val = isFramed();
		expect(val).to.be.true;
	});

	it('should return false if D2L is defined', function() {
		global.window.D2L = {};
		var val = isFramed();
		expect(val).to.be.false;
	});

});
