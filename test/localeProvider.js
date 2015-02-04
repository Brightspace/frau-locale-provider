'use strict';

var expect = require('chai').expect,
	localeProvider = require('../');

describe('localeProvider', function() {

	it('should have getLangCode defined', function() {
		expect(localeProvider.getLangCode).to.be.defined;
	});

	it('should have isRtl defined', function() {
		expect(localeProvider.isRtl).to.be.defined;
	});

});
