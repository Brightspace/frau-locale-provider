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

});
