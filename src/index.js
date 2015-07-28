'use strict';

var isFramed = require('./isFramed'),
	isRtlLocal = require('./local/isRtl'),
	isRtlFramed = require('./framed/isRtl');

module.exports.getLangTag = require('./getLangTag').get;
module.exports.isRtl = function() {
	var isRtl = isFramed() ? isRtlFramed : isRtlLocal;
	return isRtl();
};
