'use strict';

var expect = require('chai').expect,
	localeProvider = require('../');

describe('localeProvider', function() {

	it('should have getLangTag defined', function() {
		expect(localeProvider.getLangTag).to.be.defined;
	});

	it('should have isRtl defined', function() {
		expect(localeProvider.isRtl).to.be.defined;
	});

	it('should return framed isRtl', function() {
		global.window.D2L = undefined;
		var result = localeProvider.isRtl();
		expect(result).to.be.defined;
	});

	it('should return local isRtl', function() {
		global.window.D2L = {};
		var result = localeProvider.isRtl();
		expect(result).to.be.defined;
	});

});
